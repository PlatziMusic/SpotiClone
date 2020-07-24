import React from 'react';
import '../assets/styles/components/SlideBar.scss';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { Link } from 'react-router-dom';
import logoSpoti from '../assets/static/logo.png';

const SlideBar = () => {
  return (
    <section className='slidebar-container'>
      <div className='logo'>
        <img src={logoSpoti} alt='Logo' />
      </div>

      <div className='slidebar-menu'>
        <div className='slidebar-menu-option'>
          <Link to='/Home'>
            <HomeIcon className='icon-menu' />
            <p>Inicio</p>
          </Link>
        </div>
        <div className='slidebar-menu-option'>
          <Link to='/'>
            <SearchIcon className='icon-menu' />
            <p>Buscar</p>
          </Link>
        </div>
        <div className='slidebar-menu-option'>
          <Link to='/'>
            <QueueMusicIcon className='icon-menu' />
            <p>Tu Biblioteca</p>
          </Link>
        </div>
      </div>

      <div className='slidebar-newPlaylist'>
        <button type='button'>
          <Link to='/'>Crear una playlist</Link>
        </button>
      </div>

      <div className='slidebar-yourPlaylist'>
        <h2>Tus playlist</h2>
        <div className='slidebar-yourPlaylist-list'>
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
