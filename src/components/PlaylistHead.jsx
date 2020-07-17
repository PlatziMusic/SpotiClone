import React from "react";
import "../assets/styles/components/PlaylistHead.scss";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// import "../components/Icons";

const PlaylistHead = ({
  caratula,
  type,
  nameArtist,
  imageArtist,
  linkArtist,
  duration,
}) => {
  return (
    <section>
      <div className="playlist-head">
        <div className="playlist-head-image">
          <img src={caratula} alt="image-Album" />
        </div>
        <div className="playlist-head-details">
          <h5>{type}</h5>
          <h1>{nameArtist}</h1>
          <div className="metadatos">
            <img src={imageArtist} alt="imageMiniatura" />
            <Link to="/">{linkArtist}</Link>
            <p>{duration}</p>
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
    </section>
  );
};

export default PlaylistHead;
