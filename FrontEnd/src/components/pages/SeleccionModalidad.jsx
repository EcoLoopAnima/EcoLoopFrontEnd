import "./autenticacion.css";
import Boton from "../ui/Botones";

const opciones = [
    {
        id: "comprar",
        imagen: "/assets/kitEscolar.jpg",
        titulo: "Quiero comprar",
        texto: "Descubrí productos sostenibles, explorá nuestros kits y encontrá todo lo que necesitás",
        boton: "Ingresar a la tienda",
    },
    {
        id: "colaborar",
        imagen: "/assets/cuadernolas.jpg",
        titulo: "Quiero colaborar",
        texto: "Contribuí con materiales, realizá donaciones y ayudanos a impulsar el acceso a la educación",
        boton: "Ingresar a colaborar",
    },
];

export default function SeleccionModalidad({ onElegir }) {
    return (
        <div className="seleccion">
            <h1>¡Bienvenido a EcoLoop!</h1>
            <p className="seleccion-sub">¿Cómo querés participar hoy?</p>

            <div className="seleccion-grid">
                {opciones.map((o) => (
                    <article key={o.id} className="modalidad-card">
                        <img className="modalidad-img" src={o.imagen} alt={o.titulo} />
                        <h3>{o.titulo}</h3>
                        <p>{o.texto}</p>
                        <Boton onClick={() => onElegir(o.id)}>{o.boton}</Boton>
                    </article>
                ))}
            </div>
        </div>
    );
}