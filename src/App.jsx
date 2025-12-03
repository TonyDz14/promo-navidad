import { useState } from "react";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";
import RegistrationStarCounter from "./components/RegistrationStarCounter";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      {/* 🔹 Solo estas secciones tienen overlay encima del video */}
      <main className="relative">
        {/* Overlay navideño suave, solo hasta el final de Prizes */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

        <div className="relative z-10">
          <Hero onRegisterClick={openModal} />
          <Steps onRegisterClick={openModal} />
          <Prizes onRegisterClick={openModal} />
        </div>
      </main>

      {/* 🔹 Footer SIN overlay, con su propio fondo */}
      <Footer />

      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Badge flotante abajo derecha */}
      <RegistrationStarCounter />
    </div>
  );
}

export default App;
