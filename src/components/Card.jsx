import React, { useRef } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "../assets/styles/components/Card.scss";

const Card = ({ title, info, image }) => {
  const btn = useRef();

  return (
    <section
      className="card"
      onMouseEnter={() => {
        btn.current.className = "active";
      }}
      onMouseLeave={() => {
        btn.current.className = null;
      }}
    >
      <section className="card__image">
        <img src={image} alt="Imagen" />
      </section>
      <section className="card__info">
        <div className="card__info--data">
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
        <div className="card__info--btn">
          <button ref={btn}>
            <PlayArrowIcon className="PlayArrowIcon" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Card;
