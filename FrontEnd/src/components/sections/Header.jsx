import "./header.css";
import logo from "../../assets/Logo4.png";

function Header () {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="EcoLoop" />

            <div className="header-acciones">
                <button> Buscar </button>
                <button> Sign In </button>
                <button> Carrito </button>
                <button> ☰ </button>
            </div>
        </header>
    );
}

export default Header;