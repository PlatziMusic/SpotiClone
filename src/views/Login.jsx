import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoSpoti from "../assets/static/logo.png";
import "../assets/styles/components/Login.scss";

const Login = () => {
  const [form, setForm] = useState({
    emailAdress: "",
  });

  const handleChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="container-login">
      <div className="logotipo">
        <img src={logoSpoti} alt="Logo" />
      </div>

      <div className="login-socialMedia">
        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
        {/* <a href="#" onClick={signOut()}>
          Sign out
        </a> */}
        <button>Sign out</button>
        <div className="botones"></div>
        <div className="login-socialMedia-bottom">
          <p>o</p>
          <hr />
        </div>
      </div>

      <div className="login-email">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="emailAdress"
            id="login-email"
            placeholder="Direccion de Correo Electronico"
            onChange={handleChangeInput}
          />
          <input
            type="password"
            name="passwordUser"
            id="password-user"
            placeholder="Contraseña"
            onChange={handleChangeInput}
          />
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>

      <div className="login-options">
        <div className="checkbox">
          <input
            type="checkbox"
            name="remembermePassword"
            id="rememberme-password"
          />
          <label htmlFor="remembermePassword">Recuerdame</label>
        </div>
        <button>
          <a href="#iniciarSesion">Iniciar Sesión</a>
        </button>
      </div>

      <div className="login-restartPasword">
        <p>
          <a href="/">¿Se te ha olvidado la contraseña?</a>
        </p>
        <hr />
      </div>

      <div className="container-signUp">
        <p>¿No tienes cuenta?</p>
        <button>
          <Link to="/register">Suscribete a Spotify</Link>
        </button>
      </div>
    </section>
  );
};

export default Login;
