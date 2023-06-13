import React from 'react';
import { Modal } from '@mui/material';

const MyModal = ({ isOpen, closeModal }) => {
  return (
    <Modal open={isOpen}>
      {/* Contenu du modal */}
      <button onClick={closeModal}>Fermer</button>
    </Modal>
  );
};

export default MyModal;
