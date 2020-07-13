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
  const radioSeletedMale = useRef();
  const radioSeletedFemale = useRef();
  const radioSeletedOther = useRef();

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
          <Link to="/login" className="complement-link">
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
          <h3>¿Cúal es tu fecha de nacimiento?</h3>
          <div className="form__birthday">
            <input type="text" name="day" id="day" placeholder="Día" />
            <select name="month" id="month">
              <option value="none">Mes</option>
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
            <input type="text" name="year" id="year" placeholder="Año" />
          </div>
          <h3>¿Cúal es tu género?</h3>
          <div
            className="radioButton"
            onClick={() => (radioSeletedFemale.current.checked = true)}
          >
            <input
              type="radio"
              name="sex"
              id="female"
              ref={radioSeletedFemale}
            />
            <label htmlFor="female">Mujer</label>
          </div>
          <div
            className="radioButton"
            onClick={() => (radioSeletedMale.current.checked = true)}
          >
            <input type="radio" name="sex" id="male" ref={radioSeletedMale} />
            <label htmlFor="male">Hombre</label>
          </div>
          <div
            className="radioButton"
            onClick={() => (radioSeletedOther.current.checked = true)}
          >
            <input type="radio" name="sex" id="other" ref={radioSeletedOther} />
            <label htmlFor="other">Otro</label>
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
          <button type="button">Unete</button>
        </form>
        <button className="complement-button" onClick={handlePreviusContainer}>
          Atrás
        </button>
      </section>
    </section>
  );
};

export default Register;
