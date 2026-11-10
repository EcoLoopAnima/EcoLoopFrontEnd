import { heroIconos } from "../data/tienda";

function HeroTienda() {
  return (
    <section className="hero-tienda">
      <div className="hero-texto">
        <h1>Kits y productos que dan nueva vida a los materiales.</h1>
        <p>
          Desde kits completos hasta artículos individuales, acá encontrás todo
          lo que necesitás para tu día a día.
        </p>

      </div>

      <div className="hero-foto">
        <img src="/assets/kitEscolar.jpg" alt="Kit escolar EcoLoop" />
      </div>
    </section>
  );
}

export default HeroTienda;