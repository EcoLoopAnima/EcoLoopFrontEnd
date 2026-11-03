import { useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Tienda from "./components/pages/Tienda";
import Impacto from "./components/pages/Impacto";
import PuntosVida from "./components/pages/PuntosVida";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import CarritoPage from "./components/pages/Carrito";
import Carrito from "./components/ui/Carrito";

function App() {
  const [page, setPage] = useState("inicio");
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
      <Header
        onNavigate={setPage}
        cantidadCarrito={carrito.length}
        abrirCarrito={abrirCarrito}
      />

      {page === "inicio" && <Inicio />}
      {page === "tienda" && <Tienda agregarAlCarrito={agregarAlCarrito} />}
      {page === "impacto" && <Impacto />}
      {page === "puntos" && <PuntosVida />}
      {page === "nosotros" && <Nosotros />}
      {page === "login" && <Login />}
      {page === "carrito" && <CarritoPage carrito={carrito} />}

      {/* Panel del carrito (desde main) */}
      {mostrarCarrito && (
        <Carrito carrito={carrito} cerrarCarrito={cerrarCarrito} />
      )}
    </>
  );
}

export default App;