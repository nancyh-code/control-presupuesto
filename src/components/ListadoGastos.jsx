import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastosEditar, eliminarGasto }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
      {gastos.map((gasto) => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setGastosEditar={setGastosEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

export default ListadoGastos;
