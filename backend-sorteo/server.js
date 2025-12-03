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
  const { nombre, edad, correo, mobile, distrito } = req.body;

  if (!nombre || !correo) {
    return res
      .status(400)
      .json({ error: "Nombre y correo son obligatorios" });
  }

  const query = `
    INSERT INTO raffle_registrations (nombre, edad, correo, mobile, distrito)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [nombre, edad || null, correo, mobile || null, distrito || null],
    function (err) {
      if (err) {
        console.error("Error al insertar registro:", err);
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
});

// Obtener cantidad total de registros
app.get("/api/registrations/count", (req, res) => {
  db.get("SELECT COUNT(*) as total FROM raffle_registrations", [], (err, row) => {
    if (err) {
      console.error("Error al contar registros:", err);
      return res
        .status(500)
        .json({ error: "Error al obtener el conteo" });
    }
    return res.json({ total: row.total });
  });
});

// (Opcional) Listar todos los registros
app.get("/api/registrations", (req, res) => {
  db.all(
    "SELECT id, nombre, edad, correo, mobile, distrito, created_at FROM raffle_registrations ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        console.error("Error al obtener registros:", err);
        return res
          .status(500)
          .json({ error: "Error al obtener registros" });
      }
      return res.json(rows);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor de sorteo escuchando en http://localhost:${PORT}`);
});
