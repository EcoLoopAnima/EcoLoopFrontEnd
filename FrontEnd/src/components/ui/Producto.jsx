import "./Producto.css";
function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <h4>${producto.precio}</h4>

      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;
