import "./Botones.css";

export default function Boton({ children, onClick, variante = "primario" }) {
    return (
        <button className={`btn btn-${variante}`} onClick={onClick}>
            {children}
        </button>
    );
}