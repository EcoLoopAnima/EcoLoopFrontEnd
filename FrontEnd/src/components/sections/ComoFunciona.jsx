
import "./ComoFunciona.css";

function ComoFunciona() {
    const pasos = [
        {
            icono: "fa-solid fa-recycle",
            titulo: "1. Recolección",
            descripcion: "Recuperamos materiales reciclables."
        },
        {
            icono: "fa-solid fa-scissors",
            titulo: "2. Transformación",
            descripcion: "Los convertimos en productos útiles."
        },
        {
            icono: "fa-solid fa-book-open",
            titulo: "3. Comercialización",
            descripcion: "Los ponemos a tu alcance a un precio accesible."
        },
        {
            icono: "fa-solid fa-seedling",
            titulo: "4. Apoyo educativo",
            descripcion: "Contribuimos a una educación más igualitaria."
        }
    ];

    return (
        <section className="como-funciona">

            <h2>¿Cómo funciona EcoLoop?</h2>

            <div className="pasos-contenedor">

                {pasos.map((paso, index) => (
                    <div className="paso" key={index}>

                        <div className="paso-imagen">
                            <i className={paso.icono}></i>
                        </div>

                        <h3>{paso.titulo}</h3>

                        <p>{paso.descripcion}</p>

                        {index !== pasos.length - 1 && (
                            <i className="fa-solid fa-arrow-right flecha-paso"></i>
                        )}

                    </div>
                ))}

            </div>

        </section>
    );
}

export default ComoFunciona;
