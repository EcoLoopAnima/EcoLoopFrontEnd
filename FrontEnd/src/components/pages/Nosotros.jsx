import "./Nosotros.css";
import banner from "../../assets/moña.jpg";
import "../layout/Footer.css";

function Nosotros() {
  return (
    <main className="nosotros">
      {/* PRESENTACIÓN INSTITUCIONAL */}

      <section className="nosotros-presentacion">
        <div className="nosotros-banner">
          <img src={banner} alt="Un futuro con más oportunidades" />
        </div>

        <div className="nosotros-texto">
          <h1>¿Quiénes somos?</h1>

          <p>
            EcoLoop nace de una idea: transformar materiales que todavía tienen
            vida útil en nuevas oportunidades para aprender.
          </p>

          <p>
            Creemos que el acceso a los materiales escolares es fundamental para
            una educación más equitativa y que muchos recursos que dejamos de
            utilizar todavía pueden tener valor.
          </p>
        </div>
      </section>

      {/* NUESTRA MOTIVACIÓN */}

      <section className="nosotros-motivacion">
        <div className="motivacion-contenido">
          <div className="motivacion-texto">
            <h2>¿Qué nos motiva?</h2>

            <p>
              Muchas veces, materiales escolares que todavía pueden utilizarse
              terminan descartados, mientras que otras personas encuentran
              dificultades para acceder a los útiles que necesitan.
            </p>

            <p>
              En EcoLoop buscamos conectar estas dos realidades, promoviendo la
              reutilización y generando nuevas oportunidades a través del
              intercambio.
            </p>

            <span className="motivacion-frase">
              Cada material puede tener una nueva oportunidad.
            </span>
          </div>

          <div className="motivacion-imagen">
            <img
              src="/assets/kitEscolar.jpg"
              alt="Materiales escolares reutilizables"
            />
          </div>
        </div>
      </section>

      {/* NUESTROS PROPÓSITOS */}

      <section className="propositos">
        <div className="propositos-encabezado">
          <h2>Nuestros propósitos</h2>

          <p>Pequeñas acciones que construyen un futuro más sostenible.</p>
        </div>

        <div className="propositos-contenedor">
          <article className="proposito-card">
            <div className="proposito-icono">
              <i className="fa-solid fa-recycle"></i>
            </div>
            <h3>Reutilizar</h3>
            <p>
              Reducir el desperdicio y aprovechar materiales que todavía pueden
              utilizarse.
            </p>
          </article>

          <article className="proposito-card">
            <div className="proposito-icono">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Educar</h3>
            <p>Promover una educación más accesible y consciente.</p>
          </article>

          <article className="proposito-card">
            <div className="proposito-icono">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Compartir</h3>
            <p>Generar oportunidades a través del intercambio.</p>
          </article>

          <article className="proposito-card">
            <div className="proposito-icono">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3>Incluir</h3>
            <p>
              Contribuir a que más estudiantes accedan a materiales escolares.
            </p>
          </article>
        </div>
      </section>

      {/* NUESTRA PROPUESTA */}

      <section className="nosotros-propuesta">
        <div className="propuesta-encabezado">
          <h2>¿Cómo lo hacemos?</h2>
          <p>Dos formas de transformar recursos en nuevas oportunidades.</p>
        </div>

        <div className="propuesta-tarjetas">
          {/* CARD CANJE */}

          <article className="propuesta-card propuesta-canje">
            <span className="propuesta-numero">01</span>

            <div className="propuesta-icono">
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>

            <h3>Canje de materiales</h3>

            <h4>Lo que ya no usás puede servirle a alguien más.</h4>

            <p>
              Recibimos materiales reutilizables para darles una nueva
              oportunidad de uso y fomentar el intercambio responsable.
            </p>

            <span className="propuesta-detalle">
              REUTILIZAR · COMPARTIR · TRANSFORMAR
            </span>
          </article>

          {/* CARD TIENDA */}

          <article className="propuesta-card propuesta-tienda">
            <span className="propuesta-numero">02</span>

            <div className="propuesta-icono">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>

            <h3>Nuestra tienda</h3>

            <h4>Útiles con una nueva historia.</h4>

            <p>
              Ofrecemos productos y kits escolares elaborados a partir de
              materiales reciclados, acercando alternativas responsables para
              aprender.
            </p>

            <span className="propuesta-detalle">
              RECICLAR · COMPRAR · EDUCAR
            </span>
          </article>
        </div>
      </section>

      {/* Cierre */}
      <footer className="footer-ecoloop">

    {/* COLUMNA AYUDA */}
    <div className="footer-columna">
        <h3>AYUDA</h3>

        <p>
            <i className="fa-solid fa-truck"></i>
            Envíos a todo Montevideo
        </p>

        <a href="mailto:TU_CORREO">
            <i className="fa-solid fa-envelope"></i>
            Contacto
        </a>
    </div>

    {/* COLUMNA REDES */}
    <div className="footer-columna">
        <h3>SEGUINOS</h3>

        <a href="https://www.instagram.com/TU_USUARIO"
           target="_blank"
           rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
            Instagram
        </a>

        <a href="https://www.facebook.com/TU_PAGINA"
           target="_blank"
           rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
            Facebook
        </a>
    </div>

    {/* COLUMNA FRASE */}
    <div className="footer-columna footer-identidad">

        <p className="cierre-frase">
            Pequeñas acciones, grandes cambios.
        </p>

        <p className="cierre-slogan">
            Reciclá, comprá, educá.
        </p>

        <span className="cierre-marca">
            EcoLoop
        </span>

    </div>

</footer>
    </main>
  );
}

export default Nosotros;
