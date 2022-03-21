import { useState, useEffect } from "react";
import { idGenerate } from "./helpers/index";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastosEditar, setGastosEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setShowModal(true);
      setTimeout(() => {
        setModalAnimation(true);
      }, 500);
    }
  }, [gastosEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);

    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [presupuesto, gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

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
      setGastosEditar({});
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

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={showModal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
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
          setGastosEditar={setGastosEditar}
        />
      )}
    </div>
  );
}

export default App;
