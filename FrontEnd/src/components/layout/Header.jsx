import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Logo4.png";
import usuario from "../../assets/Usuario.png";
import carrito from "../../assets/Carrito.png";
import Lupa from "../ui/Lupa";

function Header({
  usuario: sesion,
  onLogout,
  onBuscar,
  cantidadCarrito = 0,
}) {
  const [buscando, setBuscando] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {sesion && (
        <div className="barra-sesion">
          <span>Hola, {sesion.nombre}</span>
          <button onClick={onLogout}>Cerrar sesión</button>
        </div>
      )}

      <header className={`header ${buscando ? "header-buscando" : ""}`}>
        <img
          className="header-logo"
          src={logo}
          alt="EcoLoop"
          onClick={() => navigate("/")}
        />

        <nav className="header-links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
          <NavLink to="/impacto">Impacto</NavLink>
          <NavLink to="/puntos">Puntos Loop</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </nav>

        <div className="header-acciones">
          <Lupa
            abierto={buscando}
            setAbierto={setBuscando}
            onBuscar={(texto) => {
              onBuscar(texto);
              setBuscando(false);
            }}
          />

          <div className="header-extra">
            <button aria-label="Sign in" onClick={() => navigate("/login")}>
              <img src={usuario} alt="" />
            </button>

            <button aria-label="Carrito" onClick={() => navigate("/carrito")}>
              <img src={carrito} alt="" />

              {cantidadCarrito > 0 && (
                <span className="header-contador">{cantidadCarrito}</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;