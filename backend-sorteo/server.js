const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// --- BASE DE DATOS SQLITE (archivo local) ---
const dbPath = path.join(__dirname, "sorteo.db");
const db = new sqlite3.Database(dbPath);

// Crear tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS raffle_registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dni TEXT NOT NULL UNIQUE,
      nombre TEXT NOT NULL,
      edad INTEGER,
      correo TEXT NOT NULL,
      mobile TEXT,
      distrito TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// --- RUTAS API ---

// Registrar un participante
app.post("/api/registrations", (req, res) => {
  const { dni, nombre, edad, correo, mobile, distrito } = req.body;

  if (!dni || !nombre || !correo) {
    return res
      .status(400)
      .json({ error: "DNI, nombre y correo son obligatorios" });
  }

  // Validar que el DNI tenga exactamente 8 dígitos numéricos
  const dniStr = String(dni).trim();
  if (!/^\d{8}$/.test(dniStr)) {
    return res
      .status(400)
      .json({ error: "El DNI debe tener exactamente 8 dígitos numéricos" });
  }

  // Verificar si ya existe un registro con ese DNI
  db.get(
    "SELECT id FROM raffle_registrations WHERE dni = ? LIMIT 1",
    [dniStr],
    (err, row) => {
      if (err) {
        console.error("Error al buscar DNI:", err);
        return res.status(500).json({ error: "Error al validar el DNI" });
      }

      if (row) {
        // Ya hay alguien con ese DNI
        return res
          .status(409)
          .json({ error: "Documento ya registrado" });
      }

      // Si no existe, insertar nuevo registro
      const query = `
        INSERT INTO raffle_registrations (dni, nombre, edad, correo, mobile, distrito)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      db.run(
        query,
        [dniStr, nombre, edad || null, correo, mobile || null, distrito || null],
        function (err2) {
          if (err2) {
            console.error("Error al insertar registro:", err2);
            return res
              .status(500)
              .json({ error: "Error al guardar el registro" });
          }

          return res.status(201).json({
            message: "Registro exitoso",
            id: this.lastID,
          });
        }
      );
    }
  );
});

// Total de inscritos
app.get("/api/registrations/count", (req, res) => {
  db.get("SELECT COUNT(*) as total FROM raffle_registrations", [], (err, row) => {
    if (err) {
      console.error("Error al contar registros:", err);
      return res
        .status(500)
        .json({ error: "Error al obtener el conteo" });
    }
    res.json({ total: row.total });
  });
});

// Listar inscritos
app.get("/api/registrations", (req, res) => {
  db.all(
    "SELECT id, dni, nombre, edad, correo, mobile, distrito, created_at FROM raffle_registrations ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        console.error("Error al obtener registros:", err);
        return res
          .status(500)
          .json({ error: "Error al obtener registros" });
      }
      res.json(rows);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor de sorteo escuchando en http://localhost:${PORT}`);
});
