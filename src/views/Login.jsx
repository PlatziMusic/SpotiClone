import React from "react";
import { Link } from "react-router-dom";
import logoSpoti from "../assets/static/logoSpoti.png";
import "../assets/styles/components/Login.scss";

const Login = () => {

  return (
    <section className="Container">
      <section className="firstContainer">
        <div className="logo">
          <img src={logoSpoti} alt="Logo" />
        </div>

        <div className="firstContainer__complement">
          <button className="btn-facebook">Inicia Sesión con Facebook</button>
          <button className="btn-google">Inicia Sesión con Google</button>
        </div>
        <span className="division">──────────── Ó ────────────</span>
        <form className="firstContainer__form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electronico"
            // onChange={handleChangeForm}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            // onChange={handleChangeForm}
          />
          <div className="checkbox">
            <input type="checkbox" name="remembermePassword" id="rememberme-password" />
            <label for="remembermePassword">Recuerdame</label>
          </div>
          <button><Link href="/">Iniciar Sesión</Link></button>
        </form>

        <div className="firstContainer-restartPasword">
          <button><Link href="/">¿Se te ha olvidado la contraseña?</Link></button>
          <span className="division">──────────── Ó ────────────</span>
        </div>

        <div className="firstContainer-signUp">
          <p>¿No tienes cuenta?</p>
          <button><Link href="/">Suscribete a Spotify</Link></button>
        </div>
      </section>
    </section>
  );
};

export default Login;
