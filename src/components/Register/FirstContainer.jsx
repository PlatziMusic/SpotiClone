import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const FirstContainer = ({ logo, handleChange, nextTo }) => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='Logo' />
        <h2>Empieza a escuchar musica con nosotros</h2>
      </div>
      <form className='firstContainer__form' onSubmit={handleSubmit(nextTo)}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electronico'
          onChange={handleChange}
          ref={register({
            required: {
              value: true,
              message: 'Campo requerido'
            },
            minLength: {
              value: 8,
              message: 'Minimo 8 caracteres'
            }
          })}
        />
        {
          errors && 
            errors.email &&
              <span>{errors.email.message}</span>
        }
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Contraseña'
          onChange={handleChange}
          ref={register({
            required: {
              value: true,
              message: 'Campo requerido'
            },
            minLength: {
              value: 6,
              message: 'Minimo 6 caracteres'
            }
          })}
        />
        {
          errors && 
            errors.password &&
              <span>{errors.password.message}</span>
        }
        <input
          type='text'
          name='username'
          id='username'
          placeholder='¿Como te llamas?'
          onChange={handleChange}
          ref={register({
            required: {
              value: true,
              message: 'Campo requerido'
            }
          })}
        />
        {
          errors && 
            errors.username &&
              <span>{errors.username.message}</span>
        }
        <button type='submit'>
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
