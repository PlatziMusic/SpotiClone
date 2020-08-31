import React from 'react';
import { Link } from 'react-router-dom';


const FirstContainer = ({ logo, handleChange, nextTo }) => {
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='Logo' />
        <h2>Empieza a escuchar musica con nosotros</h2>
      </div>
      <form className='firstContainer__form'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electronico'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Contraseña'
          onChange={handleChange}
        />
        <input
          type='text'
          name='name'
          id='name'
          placeholder='¿Como te llamas?'
          onChange={handleChange}
        />
        <button type='button' onClick={nextTo}>
          Continuar
        </button>
      </form>
      <span className='division'>──────────── Ó ────────────</span>
      <div className='firstContainer__complement'>
        <button type='button' className='btn-facebook'>Registrate con Facebook</button>
        <button type='button' className='btn-google'>Registrate con google</button>
        <h2>¿Ya eres usuario?</h2>
        <Link to='/login' className='complement-link'>
          Iniciar sesión
        </Link>
      </div>
    </>
  );
};

export default FirstContainer;
