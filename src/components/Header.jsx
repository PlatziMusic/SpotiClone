import React from "react";
import next from "../assets/static/icons/next.svg";
import before from "../assets/static/icons/before.svg";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__buttons">
        <button disabled>
          <img src={before} />
        </button>
        <button>
          <img src={next} />
        </button>
      </div>
      <div className="header__profile">
        <img
          src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/83017815_2775732919161888_1432113195098570752_n.png?_nc_cat=1&_nc_sid=85a577&_nc_oc=AQnQbsOV6uzBbJCQ4j6Qrt-uo9ukOTaHHZH0UrzCZNN6BH-kLnH7x8K4X_oYlzi_LlQ&_nc_ht=scontent.fmex3-1.fna&oh=f208995fcabee4b66172605af86e7731&oe=5F34606F"
          alt="img"
        />
        <h2>Profile</h2>
      </div>
    </header>
  );
};

export default Header;
