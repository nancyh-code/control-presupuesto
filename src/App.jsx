import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const handleNuevoGasto = () => {
    setShowModal(true);
    setTimeout(() => {
      setModalAnimation(true);
    }, 700);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
        />
      )}
    </div>
  );
}

export default App;
