import { beneficios } from "../data/tienda";

function BarraBeneficios() {
  return (
    <ul className="beneficios-barra">
      {beneficios.map((b) => (
        <li key={b.id}>
          <span className="beneficio-icono">{b.icono}</span>
          <span>{b.texto}</span>
        </li>
      ))}
    </ul>
  );
}

export default BarraBeneficios;