import React from 'react';
import { Link } from 'react-router-dom';
import logoSpoti from '../assets/static/logo.png';
import '../assets/styles/components/WelcomePage.scss';

const WelcomePage = () => {
  return (
    <section className='hero-fondo'>
      <section className='hero-welcomePage'>
        <div className='header-welcomePage'>
          <img src={logoSpoti} alt='Logo' className='header-welcomePage-img' />
          <nav className='header-welcomePage-nav'>
            <ul className='header-welcomePage-navList'>
              <li className='header-welcomePage-navList-Link'><Link to='/register'>Registrarse</Link></li>
              <li className='header-welcomePage-navList-Link'><Link to='/login'>Iniciar Sesión</Link></li>
            </ul>
          </nav>
        </div>

        <div className='hero-welcomePage-container'>
          <h1 className='hero-welcomePage-title'>Musica para todos.</h1>
          <p className='hero-welcomePage-subtitle'>Millones de canciones. Incluyendo tus favoritas</p>
          <Link to='/register' className='hero-welcomePage-button'>
            Suscribete a Spotify
          </Link>
          {/* <button className='hero-welcomePage-button' type='button'>Iniciar Sesion</button> */}
        </div>
      </section>
    </section>
  );
};

export default WelcomePage;

