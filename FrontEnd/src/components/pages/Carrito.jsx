import { useState } from "react";
import "./carritoPage.css";
import Boton from "../ui/Botones";

function Carrito({ carrito, usuario, cambiarCantidad, quitarDelCarrito, vaciarCarrito, onNavigate }) {
  const [comprado, setComprado] = useState(false);

  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  function finalizar() {
    if (!usuario) {
      onNavigate("login"); // para comprar hay que iniciar sesión
      return;
    }
    vaciarCarrito();
    setComprado(true);
  }

  if (comprado) {
    return (
      <main className="cart-page">
        <section className="cart-vacio">
          <h2>¡Gracias por tu compra, {usuario.nombre}!</h2>
          <p>Con cada compra ayudás a que más estudiantes tengan útiles.</p>
          <Boton onClick={() => onNavigate("tienda")}>Seguir comprando</Boton>
        </section>
      </main>
    );
  }

  if (carrito.length === 0) {
    return (
      <main className="cart-page">
        <section className="cart-vacio">
          <h2>Tu carrito está vacío</h2>
          <p>Todavía no agregaste nada. Mirá lo que tenemos en la tienda.</p>
          <Boton onClick={() => onNavigate("tienda")}>Ir a la tienda</Boton>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h2 className="cart-titulo">Mi carrito</h2>

      <div className="cart-layout">
        <ul className="cart-lista">
          {carrito.map((item) => (
            <li className="cart-item" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />

              <div className="cart-datos">
                <h3>{item.nombre}</h3>
                <p>$ {item.precio} UYU</p>
              </div>

              <div className="cart-cantidad">
                <button onClick={() => cambiarCantidad(item.id, -1)} aria-label="Restar uno">−</button>
                <span>{item.cantidad}</span>
                <button onClick={() => cambiarCantidad(item.id, 1)} aria-label="Sumar uno">+</button>
              </div>

              <strong className="cart-subtotal">$ {item.precio * item.cantidad}</strong>

              <button className="cart-quitar" onClick={() => quitarDelCarrito(item.id)} aria-label={`Quitar ${item.nombre}`}>
                ✕
              </button>
            </li>
          ))}
        </ul>

        <aside className="cart-resumen">
          <h3>Resumen</h3>
          <p className="cart-total">
            <span>Total</span>
            <strong>$ {total} UYU</strong>
          </p>
          <Boton onClick={finalizar}>Finalizar compra</Boton>
          <Boton variante="secundario" onClick={vaciarCarrito}>Vaciar carrito</Boton>
          {!usuario && <small>Tenés que iniciar sesión para finalizar la compra.</small>}
        </aside>
      </div>
    </main>
  );
}

export default Carrito;