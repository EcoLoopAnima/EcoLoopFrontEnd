import { useState } from "react";
import "./CarruselPrincipal.css";

function CarruselPrincipal() {
    const fotos = [
        "/assets/kitEscolar.jpg",
        "/assets/kitEmpresarial.jpg",
        "/assets/cuadernolas.jpg",
        "/assets/lapiceras.jpg",
        "/assets/lapices.jpg",
        "/assets/gomasDeBorrar.jpg",
    ];

    const [indice, setIndice] = useState(0);

  function siguiente() {
    setIndice((indice + 1) % fotos.length);
  }

  function anterior() {
    setIndice((indice - 1 + fotos.length) % fotos.length);
  }

  return (
    <div className="carrusel">
      <button onClick={anterior}>❮</button>

        <div className="carrusel-fotos">
        {[0, 1, 2].map((numero) => {
          const posicion = (indice + numero) % fotos.length;

          return (
            <div className="foto" key={fotos[posicion]}>
              <img
                src={fotos[posicion]}
                alt={`Producto Eco Loop ${posicion + 1}`}
              />
            </div>
          );
        })}
      </div>

      <button onClick={siguiente}>❯</button>
    </div>
  );
}

export default CarruselPrincipal;
