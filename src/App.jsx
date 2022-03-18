import { useState } from "react";
import { idGenerate } from "./helpers";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setShowModal(true);
    setTimeout(() => {
      setModalAnimation(true);
    }, 600);
  };

  const guardarGasto = (gasto) => {
    gasto.id = idGenerate();
    setGastos([...gastos, gasto]);
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
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
