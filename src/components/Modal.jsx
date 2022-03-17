import React from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setShowModal }) => {
  const ocultarModal = () => {
    {
      setShowModal(false);
    }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
    </div>
  );
};

export default Modal;
