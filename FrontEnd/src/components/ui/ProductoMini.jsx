import { useState } from "react";

function ProductoMini({ producto, agregarAlCarrito }) {
  const [agregado, setAgregado] = useState(false);

  function agregar() {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1000);
  }

  return (
    <article className="mini-card">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="mini-pie">
        <div>
          <h4>{producto.nombre}</h4>
          <strong>$ {producto.precio} UYU</strong>
        </div>

        <button
          className="mini-carrito"
          onClick={agregar}
          aria-label={`Agregar ${producto.nombre} al carrito`}
        >
          {agregado ? "✓" : "🛒"}
        </button>
      </div>
    </article>
  );
}

export default ProductoMini;