
import "./BeneficiosInicio.css";

function BeneficiosInicio() {
    const beneficios = [
        {
            icono: "fa-solid fa-recycle",
            texto: "Materiales reutilizados"
        },
        {
            icono: "fa-solid fa-leaf",
            texto: "Productos ecológicos"
        },
        {
            icono: "fa-solid fa-graduation-cap",
            texto: "Educación más accesible"
        },
        {
            icono: "fa-solid fa-handshake",
            texto: "Compras con impacto social"
        }
    ];

    return (
        <section className="beneficios-inicio">
            {beneficios.map((beneficio, index) => (
                <div className="beneficio-card" key={index}>
                    <i
                        className={`beneficio-icono ${beneficio.icono}`}
                        aria-hidden="true"
                    ></i>

                    <p>{beneficio.texto}</p>
                </div>
            ))}
        </section>
    );
}

export default BeneficiosInicio;
