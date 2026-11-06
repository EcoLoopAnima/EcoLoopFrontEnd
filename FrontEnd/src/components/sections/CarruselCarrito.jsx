import productos from "../data/productos";
import Producto from "../ui/Producto";
import "./CarruselCarrito.css";

function CarruselCarrito({ agregarAlCarrito }) {
  return (
    <section className="tienda-productos">
      <div className="productos-grid">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </section>
  );
}

export default CarruselCarrito;
