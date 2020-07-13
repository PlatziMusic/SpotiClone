import React from "react";
import "../assets/styles/components/Card.scss";

const Card = ({ title, info, image }) => {
  return (
    <section className="card__container">
      <section className="card__image">
        <img src={image} alt="Imagen" />
      </section>
      <section className="card__info">
        <h4>{title}</h4>
        <p>{info}</p>
        <button>▶</button>
      </section>
    </section>
  );
};

export default Card;
