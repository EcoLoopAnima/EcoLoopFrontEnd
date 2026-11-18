import { useState, useRef, useEffect } from "react";
import lupa from "../../assets/Lupa.png";

function Lupa({ abierto, setAbierto, onBuscar }) {
    const [texto, setTexto] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (abierto) inputRef.current?.focus();
    }, [abierto]);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setAbierto(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [setAbierto]);

    const buscar = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        onBuscar?.(texto);
    };

    return (
        <form
            className={`lupa ${abierto ? "lupa-abierta" : ""}`}
            onSubmit={buscar}
        >
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                tabIndex={abierto ? 0 : -1}
            />
            <button
                type="button"
                aria-label={abierto ? "Cerrar búsqueda" : "Abrir búsqueda"}
                onClick={() => setAbierto(!abierto)}
            >
                <img src={lupa} alt="" />
            </button>
        </form>
    );
}

export default Lupa;