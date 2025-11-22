import { useState } from "react";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Hero onRegisterClick={openModal} />
      <Steps onRegisterClick={openModal} />
      <Prizes onRegisterClick={openModal} />
      <Footer />
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
