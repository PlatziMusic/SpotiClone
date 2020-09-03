import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import '../../assets/styles/components/AdToPlaylist.scss';

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
      <section className='cardPlaylist-container'>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
              <h2>Favoritas de platzi</h2>
              <p>10 canciones</p>
            </div>
          </div>
        </div>
        <div className='cardPlaylist'>
          <div className='card-image-container'>
            <img src='https://i.scdn.co/image/722b5befbe1360821f1a327696c0bfa9b2ed724b' alt='Imagen' className='card-image-playlist ' />
            <div className='card--image-link'>
              <Link to='/'>
                <LibraryMusicIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className='card-info-playlist'>
            <div className='card-info-data'>
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
