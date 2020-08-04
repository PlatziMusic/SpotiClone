import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

import '../assets/styles/components/AdToPlaylist.scss';

const AddToPlaylist = ({ onClose }) => {
  return ReactDOM.createPortal(
    <section className='modal'>
      <section className='modal-container'>
        <button type='button' onClick={onClose}>
          <ClearIcon />
        </button>
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
    </section>,
    document.getElementById('modal'),
  );
};

export default AddToPlaylist;
