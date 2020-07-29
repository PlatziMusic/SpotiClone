import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import '../assets/styles/components/NewPlaylist.scss';

const NewPlaylist = () => {
  return (
    <section className='newPlaylist'>
      <section className='newPlaylist-container'>
        <ClearIcon />
        <h1>Crear nueva Playlist</h1>
        <div className='inputBox'>
          <div className='inputBox-spacing'>
            <h4>Nombre de la playlist</h4>
            <input type='text' className='inputBox-input' placeholder='Nueva playlist' />
          </div>
        </div>
        <div className='inputButtons'>
          <div className='left'>
            <button type='button' className='cancel'>Cancelar</button>
          </div>
          <div className='right'>
            <button type='button' className='create'>Crear</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewPlaylist;