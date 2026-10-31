import { useState } from "react";
import Header from "./components/layout/Header";
import "./App.css";

import CarruselPrincipal from "./components/sections/CarruselPrincipal";
import CarruselCarrito from "./components/sections/CarruselCarrito";
import Carrito from "./components/ui/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  function agregarAlCarrito(producto) {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  }

  function abrirCarrito() {
    setMostrarCarrito(true);
  }

  function cerrarCarrito() {
    setMostrarCarrito(false);
  }

  return (
    <>
      <Header cantidadCarrito={carrito.length} abrirCarrito={abrirCarrito} />

      <div>
        <h2>Conocé nuestra Tienda</h2>

        {/* Carrusel que ya tenías */}
        <CarruselPrincipal agregarAlCarrito={agregarAlCarrito} />

        {/* Nuevo carrusel conectado al carrito */}
        <CarruselCarrito agregarAlCarrito={agregarAlCarrito} />

        {/* Mostrar el carrito cuando se abre */}
        {mostrarCarrito && (
          <Carrito carrito={carrito} cerrarCarrito={cerrarCarrito} />
        )}
      </div>
    </>
  );
}

export default App;
