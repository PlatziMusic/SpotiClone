import React from 'react';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import logoSpoti from '../assets/static/logo.png';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo logo-home'>
        <img src={logoSpoti} alt='Logotipo' />
      </div>
      <div className='header__buttons'>
        {/* <button type='button' className='header__buttons--btn'>
          <NavigateBeforeIcon />
        </button>
        <button type='button' className='header__buttons--btn'>
          <NavigateNextIcon />
        </button> */}
      </div>
      <div className='header__profile'>
        <img
          src='https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/83017815_2775732919161888_1432113195098570752_n.png?_nc_cat=1&_nc_sid=85a577&_nc_oc=AQnQbsOV6uzBbJCQ4j6Qrt-uo9ukOTaHHZH0UrzCZNN6BH-kLnH7x8K4X_oYlzi_LlQ&_nc_ht=scontent.fmex3-1.fna&oh=f208995fcabee4b66172605af86e7731&oe=5F34606F'
          alt=''
        />
        <h2>Profile</h2>
      </div>
    </header>
  );
};

export default Header;
