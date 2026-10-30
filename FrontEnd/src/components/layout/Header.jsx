import "./header.css";
import logo from "../../assets/Logo4.png";
import lupa from "../../assets/lupa.png";
import usuario from "../../assets/usuario.png";
import carrito from "../../assets/carrito.png";

function Header () {
    return (
        <header className="header">

            <img className="header-logo" src={logo} alt="EcoLoop" />

            <div className="header-links">
                <button> Inicio </button>
                <button> Tienda </button>
                <button> Impacto </button>
                <button> Puntos Vida </button>
                <button> Nosotros </button>
            </div>

            <div className="header-acciones">
                <button aria-label="Buscar">
                    <img src={lupa} alt="" />
                </button>
                <button aria-label="Sign in">
                    <img src={usuario} alt="" />
                </button>
                <button aria-label="Carrito">
                    <img src={carrito} alt="" />
                </button>
            </div>

        </header>
    );
}

export default Header;