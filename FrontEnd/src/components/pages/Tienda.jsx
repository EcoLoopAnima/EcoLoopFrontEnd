import "./tienda.css";
import productos from "../data/productos";
import { kitsEstudio } from "../data/tienda";
import HeroTienda from "../sections/HeroTienda";
import BarraBeneficios from "../sections/BarraBeneficios";
import KitCard from "../ui/KitCard";
import ProductoMini from "../ui/ProductoMini";
import Footer from "../layout/Footer";

// Los productos sueltos son los que ya tenías en productos.js (sin los dos kits)
const individuales = productos.slice(2);


function Tienda({ agregarAlCarrito }) {
  return (
    <div className="tienda">
      <HeroTienda />
      <BarraBeneficios />

      {/* KITS DE ESTUDIO */}
      <section className="tienda-seccion">
        <h2 className="titulo-seccion">Kits de estudio</h2>

        <div className="grid-kits">
          {kitsEstudio.map((kit) => (
            <KitCard
              key={kit.id}
              kit={kit}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTOS INDIVIDUALES */}
      <section className="tienda-seccion">
        <h2 className="titulo-seccion">Productos individuales</h2>

        <div className="grid-mini">
          {individuales.map((p) => (
            <ProductoMini
              key={p.id}
              producto={p}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Tienda;