import "./Producto.css";

function Producto({ producto, agregarAlCarrito }) {
  return (
    <article className="producto">
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <h3>{producto.nombre}</h3>

        <p className="producto-descripcion">{producto.descripcion}</p>

        <p className="producto-precio">${producto.precio}</p>

        <button onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default Producto;
