import React from "react";
import { dateFormatting } from "../helpers";

const Gasto = ({ gasto }) => {
  const { categoria, nombreGasto, montoGastado, id, fecha } = gasto;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombreGasto}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{dateFormatting(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${montoGastado}</p>
    </div>
  );
};

export default Gasto;
