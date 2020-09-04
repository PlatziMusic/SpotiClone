import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/Perfil.scss';

const Perfil = () => {
  return (
    <section className='Perfil'>
      <section className='playlistMain'>
        <h1 className='playlistMain-title'>Vista general de la cuenta</h1>
        <div className='playlistData'>
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
        </div>
        <Link className='btn-Perfil' to='/editprofile'>Editar perfil</Link>
      </section>
    </section>
  );
};

export default Perfil;
