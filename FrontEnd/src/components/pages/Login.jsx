import { useState } from "react";
import "./autenticacion.css";
import logo from "../../assets/Logo4.png";
import Boton from "../ui/Botones";

export default function Login({ onLogin }) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario === "" || password === "") {
            setError("Completá los dos campos.");
            return;
        }
        onLogin(usuario);
    };

    return (
        <div className="autenticacion">
            <img className="autenticacion-logo" src={logo} alt="EcoLoop" />

            <form className="autenticacion-card" onSubmit={handleSubmit}>
                <label>
                    Correo electrónico o usuario
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </label>
                <label>
                    Contraseña
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {error && <p className="error">{error}</p>}
                <Boton>Ingresar</Boton>
            </form>
        </div>
    );
}