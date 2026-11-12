function Nav({ onNavigate }) {
    return (
        <nav className="nav">
            <button onClick={() => onNavigate("inicio")}>Inicio</button>
            <button onClick={() => onNavigate("tienda")}>Tienda</button>
            <button onClick={() => onNavigate("impacto")}>Impacto</button>
            <button onClick={() => onNavigate("puntos")}>Puntos Vida</button>
            <button onClick={() => onNavigate("nosotros")}>Nosotros</button>
            <button onClick={() => onNavigate("carrito")}>Carrito</button>
        </nav>
    );
}

export default Nav;