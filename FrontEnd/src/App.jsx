import { useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Tienda from "./components/pages/Tienda";
import Impacto from "./components/pages/Impacto";
import PuntosVida from "./components/pages/PuntosVida";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import SeleccionModalidad from "./components/pages/SeleccionModalidad";
import CarritoPage from "./components/pages/Carrito";
import Carrito from "./components/ui/Carrito";

import CarruselPrincipal from "./components/sections/CarruselPrincipal";
import CarruselCarrito from "./components/sections/CarruselCarrito";

function App() {
  const [page, setPage] = useState("inicio");
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [usuario, setUsuario] = useState(null);     // null = sin sesión
  const [modalidad, setModalidad] = useState(null); // null | "comprar" | "colaborar"

  function agregarAlCarrito(producto) {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  }

  function abrirCarrito() {
    setMostrarCarrito(true);
  }

  function cerrarCarrito() {
    setMostrarCarrito(false);
  }

  function iniciarSesion(nombre) {
    setUsuario(nombre);
  }

  function cerrarSesion() {
    setUsuario(null);
    setModalidad(null);
    setCarrito([]);
    setMostrarCarrito(false);
    setPage("inicio");
  }

  function elegirModalidad(id) {
    setModalidad(id);
    setPage("inicio"); // por ahora las dos llevan a la página principal
  }

  // Pantallas previas: sin usuario se ve el login, sin modalidad la selección
  if (!usuario) return <Login onLogin={iniciarSesion} />;
  if (!modalidad) return <SeleccionModalidad onElegir={elegirModalidad} />;

  return (
    <>
      <Header
        onNavigate={setPage}
        cantidadCarrito={carrito.length}
        abrirCarrito={abrirCarrito}
        modalidad={modalidad}
        onCambiarModalidad={() => setModalidad(null)}
        onCerrarSesion={cerrarSesion}
      />

      {page === "inicio" && <Inicio />}

      {page === "tienda" && (
        <>
          <Tienda agregarAlCarrito={agregarAlCarrito} />

          <div>
            <h2>Conocé nuestra Tienda</h2>
            <CarruselPrincipal agregarAlCarrito={agregarAlCarrito} />
            <CarruselCarrito agregarAlCarrito={agregarAlCarrito} />
          </div>
        </>
      )}

      {page === "impacto" && <Impacto />}
      {page === "puntos" && <PuntosVida />}
      {page === "nosotros" && <Nosotros />}
      {page === "carrito" && <CarritoPage carrito={carrito} />}

      {mostrarCarrito && (
        <Carrito carrito={carrito} cerrarCarrito={cerrarCarrito} />
      )}
    </>
  );
}

export default App;