import "./tienda.css";
import productos from "../data/productos";
import { kitsEstudio, kitEmpresarial } from "../data/tienda";
import HeroTienda from "../sections/HeroTienda";
import BarraBeneficios from "../sections/BarraBeneficios";
import KitCard from "../ui/KitCard";
import ProductoMini from "../ui/ProductoMini";

// Los productos sueltos son los que ya tenías en productos.js (sin los dos kits)
const individuales = productos.slice(2);

function Tienda({ agregarAlCarrito }) {
  return (
    <div className="tienda">
      <HeroTienda />
      <BarraBeneficios />

      <section className="tienda-seccion">
        <h2 className="titulo-seccion">Kits de estudio</h2>
        <div className="grid-kits">
          {kitsEstudio.map((kit) => (
            <KitCard key={kit.id} kit={kit} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
      </section>

      <div className="tienda-doble">
        <section>
          <h2 className="titulo-seccion">Kits empresariales</h2>
          <KitCard kit={kitEmpresarial} agregarAlCarrito={agregarAlCarrito} horizontal />
        </section>

        <section>
          <h2 className="titulo-seccion">Productos individuales</h2>
          <div className="grid-mini">
            {individuales.map((p) => (
              <ProductoMini key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tienda;