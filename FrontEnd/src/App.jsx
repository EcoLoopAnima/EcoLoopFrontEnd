import { useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Tienda from "./components/pages/Tienda";
import Impacto from "./components/pages/Impacto";
import PuntosVida from "./components/pages/PuntosVida";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import CarritoPage from "./components/pages/CarritoPage";

import CarruselPrincipal from "./components/sections/CarruselPrincipal";

function App() {
  const [page, setPage] = useState("inicio");
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [puntos, setPuntos] = useState(0); // saldo de puntos Vida
  const [canjes, setCanjes] = useState([]); // artículos ya canjeados

  function iniciarSesion(datos) {
    setUsuario(datos);
  }
  function cerrarSesion() {
    setUsuario(null);
    setPage("inicio");
  }

  // El carrito es un array de productos con su cantidad: { ...producto, cantidad }
  function agregarAlCarrito(producto) {
    const yaEsta = carrito.find((item) => item.id === producto.id);
    if (yaEsta) {
      // si ya estaba, le sumamos 1 a la cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function cambiarCantidad(id, cambio) {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item,
        )
        .filter((item) => item.cantidad > 0), // si llega a 0, se saca
    );
  }

  function quitarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  // Comprar: 1 punto Vida por cada peso gastado
  function comprar(total) {
    setPuntos(puntos + total);
    setCarrito([]);
  }

  // Canjear: se descuentan tantos puntos como cuesta el artículo
  function canjear(producto) {
    if (puntos < producto.precio) return;
    setPuntos(puntos - producto.precio);
    setCanjes([...canjes, producto]);
  }

  // cantidad total de unidades (para el numerito del header)
  const cantidadCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0,
  );

  return (
    <>
      <Header
        onNavigate={setPage}
        usuario={usuario}
        onLogout={cerrarSesion}
        cantidadCarrito={cantidadCarrito}
      />

      {page === "inicio" && (
        <>
          <Inicio />
          
        </>
      )}

      {page === "tienda" && <Tienda agregarAlCarrito={agregarAlCarrito} />}
      {page === "impacto" && <Impacto />}
      {page === "puntos" && (
        <PuntosVida
          usuario={usuario}
          puntos={puntos}
          canjes={canjes}
          canjear={canjear}
          onNavigate={setPage}
        />
      )}
      {page === "nosotros" && <Nosotros />}
      {page === "login" && (
        <Login
          usuario={usuario}
          onLogin={iniciarSesion}
          onLogout={cerrarSesion}
          onNavigate={setPage}
        />
      )}

      {page === "carrito" && (
        <CarritoPage
          carrito={carrito}
          usuario={usuario}
          cambiarCantidad={cambiarCantidad}
          quitarDelCarrito={quitarDelCarrito}
          vaciarCarrito={vaciarCarrito}
          comprar={comprar}
          onNavigate={setPage}
        />
      )}
    </>
  );
}

export default App;
