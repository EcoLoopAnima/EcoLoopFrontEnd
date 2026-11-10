import { useState } from "react";
import "./login.css";
import Boton from "../ui/Botones";
import logo from "../../assets/Logo4.png";

function Login({ usuario, onLogin, onLogout, onNavigate }) {
  const [creando, setCreando] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function enviar(e) {
    e.preventDefault();
    if (!correo.trim() || !password.trim() || (creando && !nombre.trim())) {
      setError("Completá todos los campos.");
      return;
    }
    // Simulado: sin backend. Si no hay nombre, usamos lo que va antes del @
    const nombreFinal = creando ? nombre.trim() : correo.split("@")[0];
    onLogin({ nombre: nombreFinal, correo: correo.trim() });
    setNombre("");
    setCorreo("");
    setPassword("");
    setError("");
  }

  // ---- Con sesión: perfil ----
  if (usuario) {
    return (
      <main className="usuario">
        <section className="usuario-card">
          <div className="usuario-avatar">{usuario.nombre[0].toUpperCase()}</div>
          <h2>Hola, {usuario.nombre}</h2>
          <p className="usuario-correo">{usuario.correo}</p>
          <p className="usuario-texto">
            Gracias por sumarte a EcoLoop. Cada compra ayuda a que más estudiantes tengan útiles.
          </p>
          <div className="usuario-botones">
            <Boton onClick={() => onNavigate("tienda")}>Ir a la tienda</Boton>
            <Boton variante="secundario" onClick={onLogout}>Cerrar sesión</Boton>
          </div>
        </section>
      </main>
    );
  }

  // ---- Sin sesión: formulario ----
  return (
    <main className="usuario">
      <form className="usuario-card" onSubmit={enviar}>
        <img className="usuario-logo" src={logo} alt="EcoLoop" />
        <h2>{creando ? "Crear cuenta" : "Iniciar sesión"}</h2>

        {creando && (
          <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        )}
        <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="usuario-error">{error}</p>}

        <Boton type="submit">{creando ? "Registrarme" : "Ingresar"}</Boton>

        <p className="usuario-cambio">
          {creando ? "¿Ya tenés cuenta?" : "¿Todavía no tenés cuenta?"}{" "}
          <button type="button" className="usuario-link" onClick={() => { setCreando(!creando); setError(""); }}>
            {creando ? "Iniciá sesión" : "Creá una"}
          </button>
        </p>
      </form>
    </main>
  );
}

export default Login;