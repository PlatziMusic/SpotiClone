import React from 'react';
import '../../assets/styles/components/EditPerfil.scss';

const EditPerfil = ({ handleChange }) => {

  return (
    <section className='EditPerfil'>
      <section className='editPlaylistMain'>
        <article className='editPlaylistData'>
          <h3>Editar Perfil</h3>
          <form action='' className='form'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='' />
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' id='' />
            <h3>¿Cúal es tu fecha de nacimiento?</h3>
            <div className='form-birthday'>
              <input
                type='number'
                name='day'
                id='day'
                placeholder='Día'
                className='form-birthday-day'
                onChange={handleChange}
              />
              <select name='month' id='month' className='form-birthday-month' onChange={handleChange}>
                <option value='none'>Mes</option>
                <option value='Enero'>Enero</option>
                <option value='Febrero'>Febrero</option>
                <option value='Marzo'>Marzo</option>
                <option value='Abril'>Abril</option>
                <option value='Mayo'>Mayo</option>
                <option value='Junio'>Junio</option>
                <option value='Julio'>Julio</option>
                <option value='Agosto'>Agosto</option>
                <option value='Septiembre'>Septiembre</option>
                <option value='Octubre'>Octubre</option>
                <option value='Noviembre'>Noviembre</option>
                <option value='Diciembre'>Diciembre</option>
              </select>
              <input
                type='number'
                name='year'
                id='year'
                placeholder='Año'
                className='form-birthday-year'
                onChange={handleChange}
              />
            </div>
            <label htmlFor='country'>País</label>
            <input type='text' name='country' id='' />
          </form>
          <button type='button' className='btn'>Cancelar</button>
          <button type='button' className='btn'>Guardar perfil</button>
        </article>
      </section>
    </section>
  );
};

export default EditPerfil;
