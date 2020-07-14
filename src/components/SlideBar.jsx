import React from "react";
import "../assets/styles/components/SlideBar.scss";
import logoSpoti from "../assets/static/logo.png";

const SlideBar = () => {
  return (
    <section className="slidebar-container">
      <div className="logo">
        <img src={logoSpoti} alt="Logo" />
      </div>

      <div className="slidebar-menu">
        <div className="slidebar-menu-option">
          <img src="https://picsum.photos/50/50" alt="" />
          <p>Inicio</p>
        </div>
        <div className="slidebar-menu-option">
          <img src="https://picsum.photos/50/50" alt="" />
          <p>Buscare</p>
        </div>
        <div className="slidebar-menu-option">
          <img src="https://picsum.photos/50/50" alt="" />
          <p>Tu Biblioteca</p>
        </div>
      </div>

      <div className="slidebar-newPlaylist">
        <button>Crear una playlist</button>
      </div>

      <div class="slidebar-yourPlaylist">
        <h2>Tus playlist</h2>
        <div class="slidebar-yourPlaylist-list">
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
          <p>
            <a href="#">Lista 1</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideBar;
