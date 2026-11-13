import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Tienda from "./components/pages/Tienda";
import Impacto from "./components/pages/Impacto";
import PuntosVida from "./components/pages/PuntosVida";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import CarritoPage from "./components/pages/CarritoPage";


function App() {
  const [page, setPage] = useState("inicio");
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [puntos, setPuntos] = useState(0); // puntos Vida a favor
  const [canjes, setCanjes] = useState([]); // artículos ya canjeados

  // Productos que vienen del backend
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorApi, setErrorApi] = useState(false);

  // Se ejecuta una sola vez, cuando la página carga
  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error " + res.status);
        return res.json();
      })
      .then((datos) => setProductos(datos))
      .catch(() => setErrorApi(true))
      .finally(() => setCargando(false));
  }, []);

  function iniciarSesion(datos) {
    setUsuario(datos);
  }
  function cerrarSesion() {
    setUsuario(null);
    setPage("inicio");
  }

  function agregarAlCarrito(producto) {
    const yaEsta = carrito.find((item) => item.id === producto.id);
    if (yaEsta) {

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
        .filter((item) => item.cantidad > 0), 
    );
  }

  function quitarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  function vaciarCarrito() {
    setCarrito([]);
  }


  function comprar(total) {
    setPuntos(puntos + total);
    setCarrito([]);
  }


  function canjear(producto) {
    if (puntos < producto.precio) return;
    setPuntos(puntos - producto.precio);
    setCanjes([...canjes, producto]);
  }

  
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

      {page === "inicio" && <Inicio />}

      {page === "tienda" && (
        <Tienda
          productos={productos}
          cargando={cargando}
          errorApi={errorApi}
          agregarAlCarrito={agregarAlCarrito}
        />
      )}
      {page === "impacto" && <Impacto />}
      {page === "puntos" && (
        <PuntosVida
          usuario={usuario}
          productos={productos}
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