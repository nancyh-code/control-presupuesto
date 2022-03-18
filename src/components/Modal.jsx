import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setShowModal,
  modalAnimation,
  setModalAnimation,
  guardarGasto,
}) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [montoGastado, setMontoGastado] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const ocultarModal = () => {
    {
      setModalAnimation(false);
      setTimeout(() => {
        setShowModal(false);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombreGasto, montoGastado, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({ nombreGasto, montoGastado, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad o Monto Gastado</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade el monto del Gasto: ejm 300"
            value={montoGastado}
            onChange={(e) => setMontoGastado(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="vivienda">Vivienda</option>
            <option value="gastos_varios">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
