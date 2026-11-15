
import "./Impacto.css";

const datosEncuesta = [
  {
    titulo: "Interés en productos reciclados",
    valor: "97,1%",
    descripcion: "33 de 34 personas comprarían útiles reciclados."
  },
  {
    titulo: "Importancia del precio",
    valor: "82,4%",
    descripcion: "Consideran importante o muy importante el precio."
  },
  {
    titulo: "Impacto social y ambiental",
    valor: "85,3%",
    descripcion: "Valoran que los productos sean reciclados y contribuyan a una causa social."
  },
  {
    titulo: "Precio promedio del kit",
    valor: "$210",
    descripcion: "Precio promedio que pagarían por un kit escolar básico."
  }
];

const factoresCompra = [
  { nombre: "Precios accesibles", cantidad: 24 },
  { nombre: "Incluye envío", cantidad: 18 },
  { nombre: "Variedad de productos", cantidad: 16 },
  { nombre: "Contribuye a una causa social", cantidad: 13 }
];

function Impacto() {
  return (
    <main className="pagina-impacto">

      <section className="impacto-encabezado">
        <p className="impacto-etiqueta">NUESTRO IMPACTO</p>
        <h1>Pequeñas acciones, grandes cambios</h1>
        <p>
          En EcoLoop creemos que reutilizar materiales y facilitar el acceso
          a útiles escolares puede generar un cambio positivo.
          Conocé los resultados de nuestra encuesta.
        </p>
      </section>

      <section className="impacto-estadisticas">
        {datosEncuesta.map((dato, index) => (
          <article className="impacto-card" key={index}>
            <h3>{dato.titulo}</h3>
            <p className="impacto-valor">{dato.valor}</p>
            <p className="impacto-descripcion">{dato.descripcion}</p>
          </article>
        ))}
      </section>

      <section className="impacto-graficos">
        <div className="impacto-grafico-card">
          <h2>¿Qué impulsa la compra?</h2>
          <p className="impacto-subtitulo">
            Factores que motivarían a las personas a comprar en un ecommerce.
          </p>

          {factoresCompra.map((factor, index) => (
            <div className="barra-contenedor" key={index}>
              <div className="barra-info">
                <span>{factor.nombre}</span>
                <strong>{factor.cantidad}</strong>
              </div>

              <div className="barra-fondo">
                <div
                  className="barra-relleno"
                  style={{ width: `${(factor.cantidad / 24) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="impacto-grafico-card impacto-mensaje">
          <h2>¿Qué nos dicen estos resultados?</h2>
          <p>
            Los resultados muestran la comprensión y aceptación de la propuesta de EcoLoop. 
            Se identificó que los encuestados reconocen el valor social y ambiental del proyecto, 
            así como el funcionamiento de la página. 
          </p>
          <p>
            También reflejan que el precio accesible, la variedad y la
            posibilidad de contribuir a una causa social son aspectos
            importantes para quienes participaron.
          </p>
          <p>
            Estos datos nos ayudan a orientar las decisiones y propuestas
            de EcoLoop.
          </p>
        </div>
      </section>

      <section className="impacto-aclaracion">
        <p>
          <strong>Sobre estos datos:</strong> los resultados corresponden
          a una encuesta de 34 personas. Representan opiniones e interés
          potencial, no resultados de impacto ambiental o social ya alcanzados.
        </p>
      </section>

    </main>
  );
}

export default Impacto;
