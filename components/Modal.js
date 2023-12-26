// ./components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }}>
          {children}
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
