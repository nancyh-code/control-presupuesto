import { useState, useEffect } from "react";
import { idGenerate } from "./helpers/index";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastosEditar, setGastosEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setShowModal(true);
      setTimeout(() => {
        setModalAnimation(true);
      }, 500);
    }
  }, [gastosEditar]);

  const handleNuevoGasto = () => {
    setShowModal(true);
    setGastosEditar({});
    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
    } else {
      //Nuevo Gasto
      gasto.id = idGenerate();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setModalAnimation(false);
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  return (
    <div className={showModal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos} setGastosEditar={setGastosEditar} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
          guardarGasto={guardarGasto}
          gastosEditar={gastosEditar}
        />
      )}
    </div>
  );
}

export default App;
