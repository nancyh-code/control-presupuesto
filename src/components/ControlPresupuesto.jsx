import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { quantityFormatting } from "../helpers";

import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto,
}) => {
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

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas reiniciar presupuesto y gastos?");
    if (resultado) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#dc2626" : "#2d99c8",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100 ? "#dc2626" : "#2d99c8",
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear Gastos y presupuesto
        </button>
        <p>
          <span>Presupuesto: </span> {quantityFormatting(presupuesto)}
        </p>
        <p className={`${totalDisponible < 0 ? "negativo" : null}`}>
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
