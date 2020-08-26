import React from 'react';
import '../../assets/styles/components/Perfil.scss';

const EditPerfil = () => {
  return (
    <section>
      <header className='playlistHeader'>
        <img src='' alt='Logo' />
      </header>
      <main className='editPlaylistMain'>
        <article className='editPlaylistData'>
          <h3>Editar Perfil</h3>
          <form action='' className='form'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='' />
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' id='' />
            <div className='birthday'></div>
          </form>
          <button type='button' className='btn'>Cancelar</button>
          <button type='button' className='btn'>Guardar perfil</button>
        </article>
      </main>
    </section>
  );
};

export default EditPerfil;
