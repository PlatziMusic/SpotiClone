import React from 'react';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import logoSpoti from '../../assets/static/logo.png';
import profile from '../../assets/static/profile.webp';
import '../../assets/styles/components/Header.scss';

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
          src={profile}
          alt='Profile'
        />
        <h2>Profile</h2>
      </div>
    </header>
  );
};

export default Header;
