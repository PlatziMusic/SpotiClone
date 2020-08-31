import React from 'react';
import { useStateRegister, useRegisterContainer } from '../hooks/register';

import FirstContainer from '../components/Register/FirstContainer';
import SecondContainer from '../components/Register/SecondContainer';

import logo from '../assets/static/logo.png';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const [form, handleChange] = useStateRegister();
  const [first, second, nextTo, previusTo] = useRegisterContainer();

  return (
    <section className='Container'>
      <section className='firstContainer active' ref={first}>
        <FirstContainer
          logo={logo}
          handleChange={handleChange}
          nextTo={nextTo}
        />
      </section>
      <section className='secondContainer' ref={second}>
        <SecondContainer
          logo={logo} 
          handleChange={handleChange}
          previusTo={previusTo}
          form={form}
        />
      </section>
    </section>
  );
};

export default Register;
