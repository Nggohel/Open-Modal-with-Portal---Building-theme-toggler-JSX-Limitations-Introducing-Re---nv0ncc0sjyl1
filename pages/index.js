// ./pages/index.js
import React, { useState } from "react";
import Modal from "../components/Modal";

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
      </Modal>
    </div>
  );
};

export default HomePage;
