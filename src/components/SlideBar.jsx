import React from "react";
import "../assets/styles/components/SlideBar.scss";
import logoSpoti from "../assets/static/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

const SlideBar = () => {
  return (
    <section className="slidebar-container">
      <div className="logo">
        <img src={logoSpoti} alt="Logo" />
      </div>

      <div className="slidebar-menu">
        <div className="slidebar-menu-option">
          <HomeIcon className="icon-menu" />
          <p>Inicio</p>
        </div>
        <div className="slidebar-menu-option">
          <SearchIcon className="icon-menu" />
          <p>Buscare</p>
        </div>
        <div className="slidebar-menu-option">
          <QueueMusicIcon className="icon-menu" />
          <p>Tu Biblioteca</p>
        </div>
      </div>

      <div className="slidebar-newPlaylist">
        <button>Crear una playlist</button>
      </div>

      <div className="slidebar-yourPlaylist">
        <h2>Tus playlist</h2>
        <div className="slidebar-yourPlaylist-list">
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
