import React from "react";
import { dateFormatting } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  vivienda: IconoCasa,
  gastos_varios: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto }) => {
  const { categoria, nombreGasto, montoGastado, id, fecha } = gasto;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} alt="icono de gastos" />
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
