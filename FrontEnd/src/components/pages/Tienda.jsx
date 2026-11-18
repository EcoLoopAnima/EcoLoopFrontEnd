import "./tienda.css";
import HeroTienda from "../sections/HeroTienda";
import BarraBeneficios from "../sections/BarraBeneficios";
import KitCard from "../ui/KitCard";
import ProductoMini from "../ui/ProductoMini";
import Boton from "../ui/Botones";
import Footer from "../layout/Footer";

function Tienda({ productos, cargando, errorApi, busqueda, limpiarBusqueda, agregarAlCarrito }) {
  if (cargando) return <p className="tienda-aviso">Cargando productos...</p>;
  if (errorApi) {
    return <p className="tienda-aviso">No pudimos cargar los productos. ¿Está prendido el backend?</p>;
  }

  // Si hay algo escrito en el buscador, nos quedamos solo con lo que coincide
  const texto = busqueda.trim().toLowerCase();
  const visibles = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(texto) ||
      (p.descripcion || "").toLowerCase().includes(texto),
  );

  const kitsEstudio = visibles.filter((p) => p.categoria === "kit-estudio");
  const kitsEmpresariales = visibles.filter((p) => p.categoria === "kit-empresarial");
  const individuales = visibles.filter((p) => p.categoria === "individual");

  return (
    <div className="tienda">
      <HeroTienda />
      <BarraBeneficios />

      {texto && (
        <div className="tienda-busqueda">
          <p>
            Resultados para <strong>"{busqueda}"</strong>: {visibles.length}
          </p>
          <Boton variante="secundario" onClick={limpiarBusqueda}>
            Limpiar búsqueda
          </Boton>
        </div>
      )}

      {texto && visibles.length === 0 && (
        <p className="tienda-aviso">No encontramos productos con ese nombre.</p>
      )}

      {kitsEstudio.length > 0 && (
        <section className="tienda-seccion">
          <h2 className="titulo-seccion">Kits de estudio</h2>
          <div className="grid-kits">
            {kitsEstudio.map((kit) => (
              <KitCard key={kit.id} kit={kit} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        </section>
      )}

      {kitsEmpresariales.length > 0 && (
        <section className="tienda-seccion">
          <h2 className="titulo-seccion">Kits empresariales</h2>
          <div className="grid-kits">
            {kitsEmpresariales.map((kit) => (
              <KitCard key={kit.id} kit={kit} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        </section>
      )}

      {individuales.length > 0 && (
        <section className="tienda-seccion">
          <h2 className="titulo-seccion">Productos individuales</h2>
          <div className="grid-mini">
            {individuales.map((p) => (
              <ProductoMini key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default Tienda;