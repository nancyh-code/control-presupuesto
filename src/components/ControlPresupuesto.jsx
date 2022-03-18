import { useState, useEffect } from "react";
import { quantityFormatting } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [totalDisponible, setTotalDisponible] = useState(0);
  const [totalGastado, setTotalGastado] = useState(0);

  useEffect(() => {
    const valorTotalGastado = gastos.reduce(
      (total, gasto) => gasto.montoGastado + total,
      0
    );
    const valorTotalDisponible = presupuesto - valorTotalGastado;
    setTotalGastado(valorTotalGastado);
    setTotalDisponible(valorTotalDisponible);
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
        <p>Grafica aquí</p>
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
