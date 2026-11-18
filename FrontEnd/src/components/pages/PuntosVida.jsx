import "./puntosVida.css";
import { useNavigate } from "react-router-dom";
import Boton from "../ui/Botones";

const pasos = [
  { id: 1, icono: "🛒", titulo: "Comprás", texto: "Cada peso que gastás en la tienda te da 1 punto Loop." },
  { id: 2, icono: "⭐", titulo: "Acumulás", texto: "Tus puntos se suman a tu saldo automáticamente." },
  { id: 3, icono: "🎁", titulo: "Canjeás", texto: "Usás tus puntos para llevarte artículos de la tienda." },
];

function PuntosVida({ usuario, productos, puntos, canjes, canjear }) {
  const navigate = useNavigate();

  return (
    <main className="pv">
      <h2 className="pv-titulo">Puntos Loop</h2>
      <p className="pv-sub">Comprá, acumulá y canjeá. Cada compra te da puntos para tu próximo útil.</p>

      <ol className="pv-pasos">
        {pasos.map((paso) => (
          <li key={paso.id}>
            <span className="pv-icono">{paso.icono}</span>
            <h3>{paso.titulo}</h3>
            <p>{paso.texto}</p>
          </li>
        ))}
      </ol>

      {!usuario ? (
        <section className="pv-saldo">
          <p>Iniciá sesión para ver tus puntos y canjearlos.</p>
          <Boton onClick={() => navigate("/login")}>Iniciar sesión</Boton>
        </section>
      ) : (
        <>
          <section className="pv-saldo">
            <p>Tu saldo</p>
            <strong className="pv-numero">{puntos}</strong>
            <p>puntos Loop</p>
            {puntos === 0 && (
              <Boton onClick={() => navigate("/tienda")}>Ir a comprar</Boton>
            )}
          </section>

          <h3 className="pv-seccion">Canjeá tus puntos</h3>
          <div className="pv-grid">
            {productos.map((p) => {
              const alcanza = puntos >= p.precio;
              return (
                <article className="pv-card" key={p.id}>
                  <img src={p.imagen} alt={p.nombre} />
                  <h4>{p.nombre}</h4>
                  <p className="pv-costo">{p.precio} puntos</p>
                  {alcanza ? (
                    <Boton onClick={() => canjear(p)}>Canjear</Boton>
                  ) : (
                    <small>Te faltan {p.precio - puntos} puntos</small>
                  )}
                </article>
              );
            })}
          </div>

          {canjes.length > 0 && (
            <>
              <h3 className="pv-seccion">Tus canjes</h3>
              <ul className="pv-canjes">
                {canjes.map((c, i) => (
                  <li key={i}>✓ {c.nombre} <span>−{c.precio} puntos</span></li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default PuntosVida;