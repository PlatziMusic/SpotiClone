import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Playlist.scss";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Playlist = () => {
  return (
    <section className="playlist">
      <div className="playlist-head">
        <div className="playlist-head-image">
          <img
            src="https://i.scdn.co/image/ab67616d00001e0201e2ebfbf4f8147621c8a866"
            alt="imageAlbum"
          />
        </div>
        <div className="playlist-head-details">
          <h5>ÁLBUM</h5>
          <h1>Vampire Weekend</h1>
          <div className="metadatos">
            <img
              src="https://i.scdn.co/image/5390ca6bd240b2a15b71868d1d105c3d6a7a7b17"
              alt="imageMiniatura"
            />
            <Link to="/">Vampire Weekend</Link>
            <p>• 2008 • 34 min 18 seg</p>
          </div>
        </div>
      </div>

      <div className="playlist-options">
        <button type="button" className="play">
          <PlayArrowIcon className="icon" style={{ fontSize: 40 }} />
        </button>
        <button type="button" className="like">
          <FavoriteBorderIcon className="icon" style={{ fontSize: 40 }} />
        </button>
        <button type="button" className="more">
          <MoreHorizIcon className="icon" style={{ fontSize: 40 }} />
        </button>
      </div>

      <div className="tracklist">
        <div className="song">
          <div className="song-button">
            <button type="button">
              <MusicNoteIcon
                className="icon icon-Song"
                style={{ fontSize: 30 }}
              />
            </button>
          </div>
          <div className="song-details">
            <div className="song-details-titles">
              <p>Nombre de la canción</p>
              <Link to="/">Artista</Link>
            </div>
            <div className="song-details-more">
              <button type="button">
                <MoreHorizIcon className="icon" style={{ fontSize: 40 }} />
              </button>
            </div>
          </div>
          <div className="song-duration">
            <p>2:07</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
