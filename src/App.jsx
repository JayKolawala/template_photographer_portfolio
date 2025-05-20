import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PortfolioGrid from "./components/PortfolioGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const openModal = (imgSrc, caption) => {

    setModalImage(imgSrc);
    setModalCaption(caption);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-grow ml-0 lg:ml-[300px] transition-all duration-300">
        <PortfolioGrid openModal={openModal} />
        <About />
        <Contact />
      </main>

      <Footer />

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={modalImage}
        caption={modalCaption}
      />
    </div>
  );
}

export default App;
