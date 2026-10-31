import { useState } from "react";
import Header from "./components/sections/Header";
import CarruselCarrito from "./components/sections/CarruselCarrito";
import Carrito from "./components/ui/Carrito";

import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }

  return (
    <>
      <Header />

      {mostrarCarrito ? (
        <Carrito
          carrito={carrito}
          cerrarCarrito={() => setMostrarCarrito(false)}
        />
      ) : (
        <CarruselCarrito agregarAlCarrito={agregarAlCarrito} />
      )}
    </>
  );
}

export default App;
