import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { quantityFormatting } from "../helpers";

import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [totalDisponible, setTotalDisponible] = useState(0);
  const [totalGastado, setTotalGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const valorTotalGastado = gastos.reduce(
      (total, gasto) => gasto.montoGastado + total,
      0
    );
    const valorTotalDisponible = presupuesto - valorTotalGastado;
    //Calcular el porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - valorTotalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTotalGastado(valorTotalGastado);
    setTotalDisponible(valorTotalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  // const formatearCantidad = (cantidad) => {
  //   return cantidad.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: "#2d99c8",
            trailColor: "#f5f5f5",
            textColor: "#2d99c8",
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {quantityFormatting(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {quantityFormatting(totalDisponible)}
        </p>
        <p>
          <span>Gastado: </span> {quantityFormatting(totalGastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
