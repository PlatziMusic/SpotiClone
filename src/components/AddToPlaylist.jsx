import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';

import '../assets/styles/components/AdToPlaylist.scss';

const AdToPlaylist = () => {
  return (
    <section className='adToPlaylist'>
      <section className='adToPlaylist-container'>
        <ClearIcon />
        <h1>Añadir a Playlist</h1>
        <div className='inputButtons'>
          <div className='right'>
            <button type='button' className='create'>Nueva Playlist</button>
          </div>
        </div>
      </section>
      <section className='playlistCard-container'>
        <div className='card'>
          <div className='card__image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card__image' />
            <div className='card__image-link'>
              <Link to='/'>Enlace</Link>
            </div>
          </div>
          <div className='card__info'>
            <div className='card__info--data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdToPlaylist;