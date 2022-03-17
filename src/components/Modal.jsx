import React from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setShowModal, modalAnimation, setModalAnimation }) => {
  const ocultarModal = () => {
    {
      setModalAnimation(false);
      setTimeout(() => {
        setShowModal(false);
      }, 500);
    }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
