import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoSpotify from "../assets/static/logo.png";
import "../assets/styles/components/Register.scss";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
  });
  const firstContainer = useRef();
  const secondContainer = useRef();

  const handleNextContainer = () => {
    firstContainer.current.style.display = "none";
    secondContainer.current.style.display = "flex";
  };

  const handlePreviusContainer = () => {
    firstContainer.current.style.display = "flex";
    secondContainer.current.style.display = "none";
  };

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="Container">
      <section className="firstContainer" ref={firstContainer}>
        <div className="logo">
          <img src={logoSpotify} alt="Logo" />
          <h2>Empieza a escuchar musica con nosotros</h2>
        </div>
        <form className="firstContainer__form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electronico"
            onChange={handleChangeForm}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={handleChangeForm}
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="¿Como te llamas?"
            onChange={handleChangeForm}
          />
          <button type="button" onClick={handleNextContainer}>
            Continuar
          </button>
        </form>
        <span className="division">──────────── Ó ────────────</span>
        <div className="firstContainer__complement">
          <button className="btn-facebook">Registrate con Facebook</button>
          <button className="btn-google">Registrate con google</button>
          <h2>¿Ya eres usuario?</h2>
          <Link to="/login" className="firstContainer__complement-link">
            Iniciar sesión
          </Link>
        </div>
      </section>

      {/* separador */}
      <section className="secondContainer" ref={secondContainer}>
        <div className="logo">
          <img src={logoSpotify} alt="Logo" />
          <h2>Ya casi</h2>
        </div>
        <form className="secondContainer__form">
          <label>¿Cúal es tu fecha de nacimiento?</label>
          <div className="form__birthday">
            <input type="text" name="day" id="day" placeholder="Día" />
            <select name="month" id="month"></select>
            <input type="text" name="year" id="year" placeholder="Año" />
          </div>
          <label>¿Cúal es tu género?</label>
          <div className="radiobutton">
            <input type="radio" name="female" id="female" />
            <span>Mujer</span>
          </div>
          <div className="radiobutton">
            <input type="radio" name="male" id="male" />
            <span>Hombre</span>
          </div>
          <div className="radiobutton">
            <input type="radio" name="other" id="other" />
            <span>Otro</span>
          </div>
          <p>
            Al hacer clic en{" "}
            <strong>
              {" "}
              Unirme a Spotify, acepta los Términos y Condiciones de Uso de
              Spotify
            </strong>
          </p>
          <p>
            Para obtener más información sobre cómo recopilamos, utilizamos,
            compartimos y protegemos sus datos personales, lea la{" "}
            <strong>Política de Privacidad</strong>
          </p>
          <button type="button" onClick={handlePreviusContainer}>
            Unirte a Spotify
          </button>
        </form>
        <button type="button" onClick={handlePreviusContainer}>
          Atrás
        </button>
      </section>
    </section>
  );
};

export default Register;
