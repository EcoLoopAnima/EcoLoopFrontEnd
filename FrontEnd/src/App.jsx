import { useState } from "react";
import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Tienda from "./components/pages/Tienda";
import Impacto from "./components/pages//Impacto";
import PuntosVida from "./components/pages/PuntosVida";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import Carrito from "./components/pages/Carrito";

function App() {
    const [page, setPage] = useState("inicio");

    return (
        <>
            <Header onNavigate={setPage} />

            {page === "inicio" && <Inicio />}
            {page === "tienda" && <Tienda />}
            {page === "impacto" && <Impacto />}
            {page === "puntos" && <PuntosVida />}
            {page === "nosotros" && <Nosotros />}
            {page === "login" && <Login />}
            {page === "carrito" && <Carrito />}
        </>
    );
}

export default App;