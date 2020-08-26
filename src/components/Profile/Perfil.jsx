import React from 'react';
import '../../assets/styles/components/Perfil.scss';

const Perfil = () => {
  return (
    <section>
      <header className='playlistHeader'>
        <img src='' alt='Logo' />
        <button type='button' className='btn'>Regresar al reproductor</button>
      </header>
      <main className='playlistMain'>
        <h1 className='playlistMain-title'>Vista general de la cuenta</h1>
        <article className='playlistData'>
          <h3>Perfil</h3>
          <table className='playlistData-table'>
            <tbody className='tbody'>
              <tr className='tr'>
                <td>Nombre de usuario</td>
                <td>Juan Perez</td>
              </tr>
              <tr className='tr'>
                <td>Email</td>
                <td>JuanPerez@gmail.com</td>
              </tr>
              <tr className='tr'>
                <td>Fecha de Nacimiento</td>
                <td>25 de Febrero del 1995</td>
              </tr>
              <tr className='tr'>
                <td>País</td>
                <td>México</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button type='button' className='btn'>Editar perfil</button>
      </main>
    </section>
  );
};

export default Perfil;
