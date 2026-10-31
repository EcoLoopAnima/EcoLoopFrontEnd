import { useState } from "react";
import Header from "./components/layout/Header";
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
    <div>
      <h2>Conocé nuestra Tienda</h2>

      <CarruselPrincipal />
    </div>

    </>

  );
}

export default App;
