import "./tienda.css";
import HeroTienda from "../sections/HeroTienda";
import BarraBeneficios from "../sections/BarraBeneficios";
import KitCard from "../ui/KitCard";
import ProductoMini from "../ui/ProductoMini";
import Footer from "../layout/Footer";

function Tienda({ productos, cargando, errorApi, agregarAlCarrito }) {
  if (cargando) return <p className="tienda-aviso">Cargando productos...</p>;
  if (errorApi) {
    return <p className="tienda-aviso">No pudimos cargar los productos. ¿Está prendido el backend?</p>;
  }

  const kitsEstudio = productos.filter((p) => p.categoria === "kit-estudio");
  const individuales = productos.filter((p) => p.categoria === "individual");

  return (
    <div className="tienda">
      <HeroTienda />
      <BarraBeneficios />


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