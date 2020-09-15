import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux';
import { useForm } from 'react-hook-form';


const SecondContainer = ({ logo, handleChange, previusTo, form }) => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const OnSubmit = (event) => {
    dispatch(registerUser(form, '/login'));
  }
  console.log(errors);
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='Logo' />
        <h2>Ya casi</h2>
      </div>
      <form className='secondContainer__form' onSubmit={handleSubmit(OnSubmit)}>
        <h3>¿Cúal es tu fecha de nacimiento?</h3>
        <div className='form__birthday'>
          <input
            type='text'
            name='day'
            id='day'
            placeholder='Día'
            onChange={handleChange}
            ref={register({
              required: {
                value: true,
                message: 'Campo faltante'
              },
              min: {
                value: 1,
                message: 'Dia minimo 1'
              },
              max: {
                value: 31,
                message: 'Dia maximo es 31'
              }
            })}
          />
          <select 
            name='month' 
            id='month'
            ref={register({ 
              required: {value: true,
              message: 'Campo faltante'}
            })}  
            onChange={handleChange}
          >
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
            type='text'
            name='year'
            id='year'
            placeholder='Año'
            onChange={handleChange}
            ref={register({
              required: {
                value: true,
                message: 'Campo faltante'
              },
              min: {
                value: 1950,
                message: 'Año minimo 1950'
              },
              max: {
                value: 2002,
                message: 'Año maximo es 2002'
              }
            })}
          />
        </div>
        <h3>¿Cúal es tu género?</h3>
        <div
          className='radioButton'
        >
          <input
            type='radio'
            name='gener'
            id='female'
            value='famale'
            onChange={handleChange}
            ref={register({ required: true })}
          />
          <label htmlFor='female'>Mujer</label>
        </div>
        <div
          className='radioButton'
        >
          <input
            type='radio'
            name='gener'
            value='male'
            id='male'
            onChange={handleChange}
            ref={register({ required: true })} 
          />
          <label htmlFor='male'>Hombre</label>
        </div>
        <div
          className='radioButton'
        >
          <input
            type='radio'
            name='gener'
            value='other'
            id='other'
            onChange={handleChange}
            ref={register({ required: true })} 
          />
          <label htmlFor='other'>Otro</label>
        </div>
        <p>
          Al hacer clic en
          <strong>
            &nbsp;
            Unirme a Melody, acepta los Términos y Condiciones de Uso de
            Melody
          </strong>
        </p>
        <p>
          Para obtener más información sobre cómo recopilamos, utilizamos,
          compartimos y protegemos sus datos personales, lea la&nbsp
          <strong>Política de Privacidad</strong>
        </p>
        <button type='submit'>Unete</button>
      </form>
      <button
        type='button'
        className='complement-button'
        onClick={previusTo}
      >
        Atrás
      </button>
    </>
  );
};

SecondContainer.propTypes = {
  registerUser: PropTypes.func,
}

export default SecondContainer;
