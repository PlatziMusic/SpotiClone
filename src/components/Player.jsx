import React from "react";
import "../assets/styles/components/Player.scss";

const Player = () => {
  return (
    <section className="player">
      <div className="player__info">
        <h3>titulo</h3>
      </div>
      <div className="player__progress">progress</div>
      <div className="player__volume">volume</div>
    </section>
  );
};

export default Player;
