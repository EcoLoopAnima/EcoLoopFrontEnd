
import BeneficiosInicio from "../sections/BeneficiosInicio";
import BannerInicio from "../sections/BannerInicio";
import ComoFunciona from "../sections/ComoFunciona";
import CarruselPrincipal from "../sections/CarruselPrincipal";
import Footer from "../layout/Footer";

function Inicio() {
  return (
    <main className="inicio">

      <BannerInicio />

      <BeneficiosInicio />

      <ComoFunciona />

      <CarruselPrincipal />

      {/* Aquí agregaremos futuras secciones de Inicio */}

      <Footer />

    </main>
  );
}

export default Inicio;
