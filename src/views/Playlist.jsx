import React from "react";
import "../assets/styles/components/Playlist.scss";

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
            {/* <p>
              <Link to="/">Vampire Weekend </Link> • 2008 • 34 min 18 seg
            </p> */}
          </div>
        </div>
      </div>

      <div className="playlist-options">
        <button type="button" className="play">
          <span>▶</span>
        </button>
        <button type="button" className="like">
          Like
        </button>
        <div className="more-options">
          <button type="button">...</button>
        </div>
      </div>

      <div className="tracklist">
        <div className="song">
          <div className="song-buttonPlay">
            <button type="button">Play</button>
          </div>
          <div className="song-details">
            <div className="song-details-titles">
              <p>Nombre de la canción</p>
              {/* <p>
                <Link to="/">Artista</Link>
              </p> */}
            </div>
            <div className="song-details-moreOptions">
              <button type="button">...</button>
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
