import { useState } from "react";
import productos from "../data/productos";
import Producto from "../ui/Producto";
import "./CarruselCarrito.css";

function CarruselCarrito({ agregarAlCarrito }) {
  const [indice, setIndice] = useState(0);

  function siguiente() {
    setIndice((indice + 1) % productos.length);
  }

  function anterior() {
    setIndice((indice - 1 + productos.length) % productos.length);
  }

  return (
    <div className="carrusel">
      <button onClick={anterior}>❮</button>

      <div className="carrusel-fotos">
        {[0, 1, 2, 3].map((numero) => {
          const posicion = (indice + numero) % productos.length;

          return (
            <Producto
              key={productos[posicion].id}
              producto={productos[posicion]}
              agregarAlCarrito={agregarAlCarrito}
            />
          );
        })}
      </div>

      <button onClick={siguiente}>❯</button>
    </div>
  );
}

export default CarruselCarrito;
