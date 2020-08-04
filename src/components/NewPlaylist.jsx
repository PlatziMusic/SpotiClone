import React from 'react';
import ReactDOM from 'react-dom';
import ClearIcon from '@material-ui/icons/Clear';
import '../assets/styles/components/NewPlaylist.scss';

const NewPlaylist = ({ onClose }) => {
  return ReactDOM.createPortal(
    <section className='newPlaylist'>
      <section className='newPlaylist-container'>
        <button type='button' onClick={onClose}>
          <ClearIcon />
        </button>
        <h1>Crear nueva Playlist</h1>
        <div className='inputBox'>
          <div className='inputBox-spacing'>
            <h4>Nombre de la playlist</h4>
            <input type='text' className='inputBox-input' placeholder='Nueva playlist' />
          </div>
        </div>
        <div className='inputButtons'>
          <div className='left'>
            <button type='button' className='cancel' onClick={onClose}>Cancelar</button>
          </div>
          <div className='right'>
            <button type='button' className='create'>Crear</button>
          </div>
        </div>
      </section>
    </section>,
    document.getElementById('modal'),
  );
};

export default NewPlaylist;
