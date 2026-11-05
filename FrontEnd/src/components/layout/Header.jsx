import { useState } from "react";
import "./header.css";
import logo from "../../assets/Logo4.png";
import carrito from "../../assets/Carrito.png";
import Lupa from "../ui/Lupa";

function Header({ onNavigate, modalidad, onCambiarModalidad, onCerrarSesion }) {
    const [buscando, setBuscando] = useState(false);

    return (
        <>
            <div className="barra-sesion">
                <span>
                    Modalidad: <strong>{modalidad === "colaborar" ? "Colaborar" : "Comprar"}</strong>
                </span>
                <button className="modalidad-btn" onClick={onCambiarModalidad}>
                    Cambiar
                </button>
                <button onClick={onCerrarSesion}>Salir</button>
            </div>

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
                        <button aria-label="Carrito" onClick={() => onNavigate("carrito")}>
                            <img src={carrito} alt="" />
                        </button>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;