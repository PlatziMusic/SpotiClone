import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import '../../assets/styles/components/NewPlaylist.scss';

const NewPlaylist = () => {
  return (
    <section className='newPlaylist'>
      <section className='newPlaylist-container'>
        <ClearIcon />
        <h1>¿Seguro que quieres eliminar esta playlist?</h1>
        <div className='inputButtons'>
          <div className='left'>
            <button type='button' className='cancel'>Cancelar</button>
          </div>
          <div className='right'>
            <button type='button' className='create'>Eliminar</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewPlaylist;