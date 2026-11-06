import { useState } from "react";
import Boton from "./Botones";
import BotonAgregar from "./BotonAgregar";

function KitCard({ kit, agregarAlCarrito, horizontal = false }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <article className={horizontal ? "kit-card kit-horizontal" : "kit-card"}>
      <div className="kit-foto">
        <img src={kit.imagen} alt={kit.nombre} />
        {kit.etiqueta && <span className="kit-etiqueta">{kit.etiqueta}</span>}
      </div>

      <div className="kit-info">
        <h3>{kit.nombre}</h3>
        <p>{kit.descripcion}</p>

        {abierto && (
          <ul className="kit-incluye">
            {kit.incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="kit-pie">
          <strong>$ {kit.precio} UYU</strong>
          <Boton onClick={() => setAbierto(!abierto)}>
            {abierto ? "Ocultar" : "Ver detalle"}
          </Boton>
        </div>

        {abierto && (
          <BotonAgregar producto={kit} agregarAlCarrito={agregarAlCarrito} />
        )}
      </div>
    </article>
  );
}

export default KitCard;