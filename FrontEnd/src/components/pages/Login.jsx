import { useState } from "react";
import "./login.css";

function Login({ onNavigate, setUser }) {
  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    setError("");

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");

    if (esRegistro) {
      if (usuarios[email]) return setError("Ese email ya está registrado");
      if (password.length < 6)
        return setError("La contraseña debe tener al menos 6 caracteres");
      if (password !== confirmar)
        return setError("Las contraseñas no coinciden");

      usuarios[email] = password;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
      if (!usuarios[email])
        return setError("No existe una cuenta con ese email");
      if (usuarios[email] !== password)
        return setError("Contraseña incorrecta");
    }

    localStorage.setItem("sesion", email);
    setUser(email);
    onNavigate("inicio");
  };

  const cambiarModo = () => {
    setEsRegistro(!esRegistro);
    setError("");
  };

  return (
    <main className="login">
      <form className="login-form" onSubmit={enviar}>
        <h2>{esRegistro ? "Crear cuenta" : "Iniciar sesión"}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {esRegistro && (
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            required
          />
        )}

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-boton">
          {esRegistro ? "Crear cuenta" : "Entrar"}
        </button>

        <button type="button" className="login-cambiar" onClick={cambiarModo}>
          {esRegistro ? "Ya tengo cuenta" : "No tengo cuenta, crear una"}
        </button>
      </form>
    </main>
  );
}

export default Login;
