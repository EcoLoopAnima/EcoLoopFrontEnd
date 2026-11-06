import { useState } from "react";
import Boton from "./Botones";

function BotonAgregar({ producto, agregarAlCarrito }) {
  const [agregado, setAgregado] = useState(false);

  function agregar() {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1000);
  }

  return (
    <Boton variante="secundario" onClick={agregar}>
      {agregado ? "✓ Agregado" : "🛒 Agregar al carrito"}
    </Boton>
  );
}

export default BotonAgregar;