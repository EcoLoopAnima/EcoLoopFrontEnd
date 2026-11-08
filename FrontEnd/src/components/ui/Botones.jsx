import "./botones.css";

export default function Boton({ children, onClick, variante = "primario", type = "button" }) {
  return (
    <button type={type} className={`btn btn-${variante}`} onClick={onClick}>
      {children}
    </button>
  );
}