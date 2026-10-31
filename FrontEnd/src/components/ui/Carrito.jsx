import "./Carrito.css";
function Carrito({ carrito, cerrarCarrito }) {
  return (
    <div className="carrito">
      <h2>Mi carrito</h2>

      <button onClick={cerrarCarrito}>Volver a la tienda</button>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        carrito.map((producto, index) => (
          <div className="producto-carrito" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />

            <h3>{producto.nombre}</h3>

            <p>{producto.descripcion}</p>

            <p>${producto.precio}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Carrito;
