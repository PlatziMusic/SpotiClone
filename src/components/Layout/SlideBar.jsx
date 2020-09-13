import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

import NewPlaylist from '../Modals/NewPlaylist';
import AddToPlaylist from '../Modals/AddToPlaylist';
// import logoSpoti from '../assets/static/logo.png';
import '../../assets/styles/components/SlideBar.scss';
// import { Visibility } from '@material-ui/icons';

const SlideBar = () => {
  const [modal, setModal] = useState({
    isOpen: false,
  });

  return (
    <section className='slidebar-container'>
      {/* <div className='logo'>
        <img src={logoSpoti} alt='Logo' />
      </div> */}

      <div className='slidebar-menu'>
        <div className='slidebar-menu-option'>
          <Link to='/'>
            <HomeIcon className='icon-menu' />
            <p>Inicio</p>
          </Link>
        </div>
        <div className='slidebar-menu-option'>
          <Link to='/search'>
            <SearchIcon className='icon-menu' />
            <p>Buscar</p>
          </Link>
        </div>
        <div className='slidebar-menu-option'>
          <Link to='/user'>
            <QueueMusicIcon className='icon-menu' />
            <p>Tu Biblioteca</p>
          </Link>
        </div>
      </div>

      <div className='slidebar-newPlaylist'>
        <button type='button' onClick={() => setModal({isOpen: true})}>
          Crear una nueva playlist
        </button>
      </div>

      {modal.isOpen && (
        <NewPlaylist onClose={() => setModal({isOpen: false})} />
      )}

      <div className='slidebar-yourPlaylist'>
        <h2>Tus playlist</h2>
        <div className='slidebar-yourPlaylist-list'>
          <p>
            <Link to='/Album'>Aztlan</Link>
          </p>
          <p>
            <Link to='/Playlist'>Vampire Weekend</Link>
          </p>
          <p>
            <Link to='/results'>Resultados</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
          <p>
            <Link to='/Playlist'>Lista 1</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideBar;
