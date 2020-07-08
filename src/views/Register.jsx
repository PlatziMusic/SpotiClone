import React, { useRef } from "react";
import "../assets/styles/components/Register.scss";

const Register = () => {
  const firstContainer = useRef();
  const secondContainer = useRef();

  const handleNextContainer = () => {
    firstContainer.current.style.display = "none";
    secondContainer.current.style.display = "block";
  };

  const handlePreviusContainer = () => {
    firstContainer.current.style.display = "block";
    secondContainer.current.style.display = "none";
  };

  return (
    <section className="Container">
      <section className="firstContainer" ref={firstContainer}>
        <p>Hola mundo</p>
        <p>Como estas</p>
        <button type="button" onClick={handleNextContainer}>
          Next
        </button>
      </section>
      <section className="secondContainer" ref={secondContainer}>
        <button type="button" onClick={handlePreviusContainer}>
          Next
        </button>
      </section>
    </section>
  );
};

export default Register;
