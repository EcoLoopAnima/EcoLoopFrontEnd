import { useState } from "react";
import "./header.css";
import logo from "../../assets/Logo4.png";
import usuario from "../../assets/usuario.png";
import carrito from "../../assets/carrito.png";
import Lupa from "../ui/Lupa";

function Header({ onNavigate }) {
    const [buscando, setBuscando] = useState(false);

    return (
        <header className={`header ${buscando ? "header-buscando" : ""}`}>

            <img
                className="header-logo"
                src={logo}
                alt="EcoLoop"
                onClick={() => onNavigate("inicio")}
            />

            <div className="header-links">
                <button onClick={() => onNavigate("inicio")}> Inicio </button>
                <button onClick={() => onNavigate("tienda")}> Tienda </button>
                <button onClick={() => onNavigate("impacto")}> Impacto </button>
                <button onClick={() => onNavigate("puntos")}> Puntos Vida </button>
                <button onClick={() => onNavigate("nosotros")}> Nosotros </button>
            </div>

            <div className="header-acciones">
                <Lupa
                    abierto={buscando}
                    setAbierto={setBuscando}
                    onBuscar={(texto) => console.log("Buscando:", texto)}
                />
                <div className="header-extra">
                    <button aria-label="Sign in" onClick={() => onNavigate("login")}>
                        <img src={usuario} alt="" />
                    </button>
                    <button aria-label="Carrito" onClick={() => onNavigate("carrito")}>
                        <img src={carrito} alt="" />
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Header;