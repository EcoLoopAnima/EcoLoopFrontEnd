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
  const [user, setUser] = useState(localStorage.getItem("sesion")); // NUEVO

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
        user={user} // NUEVO
        setUser={setUser} // NUEVO
      />
      {page === "inicio" && (
        <>
          <Inicio />
          <CarruselPrincipal agregarAlCarrito={agregarAlCarrito} />
        </>
      )}
      {page === "tienda" && (
        <>
          <Tienda agregarAlCarrito={agregarAlCarrito} />

          <div>
            <h2>Conocé nuestra Tienda</h2>
            <CarruselCarrito agregarAlCarrito={agregarAlCarrito} />
          </div>
        </>
      )}
      {page === "impacto" && <Impacto />}
      {page === "puntos" && <PuntosVida />}
      {page === "nosotros" && <Nosotros />}
      {page === "login" && (
        <Login onNavigate={setPage} setUser={setUser} />
      )}{" "}
      {/* NUEVO: props */}
      {page === "carrito" && <CarritoPage carrito={carrito} />}
      {mostrarCarrito && (
        <Carrito carrito={carrito} cerrarCarrito={cerrarCarrito} />
      )}
    </>
  );
}

export default App;
