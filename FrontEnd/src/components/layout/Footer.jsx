
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-ecoloop">

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

            <div className="footer-columna">
                <h3>SEGUINOS</h3>

                <a
                    href="https://www.instagram.com/TU_USUARIO"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                </a>

                <a
                    href="https://www.facebook.com/TU_PAGINA"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-facebook"></i>
                    Facebook
                </a>
            </div>

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
    );
}

export default Footer;
