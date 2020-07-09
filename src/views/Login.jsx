import React from "react";
import { Link } from "react-router-dom";
import logoSpoti from "../assets/static/logoSpoti.png";
import "../assets/styles/components/Login.scss";

const Login = () => {
  return (
    <section className="container-login">
      <div className="logotipo">
        <img src={logoSpoti} alt="Logo" />
      </div>

      <div className="login-socialMedia">
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
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
        <input
          type="email"
          name="emailAdress"
          id="login-email"
          placeholder="Direccion de Correo Electronico"
        />
        <input
          type="password"
          name="passwordUser"
          id="password-user"
          placeholder="Contraseña"
        />
      </div>

      <div className="login-options">
        <div className="checkbox">
          <input
            type="checkbox"
            name="remembermePassword"
            id="rememberme-password"
          />
          <label for="remembermePassword">Recuerdame</label>
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
