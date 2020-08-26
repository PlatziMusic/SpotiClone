import React from 'react';
import { useHistory } from 'react-router-dom';
import SlideBar from './SlideBar';
import Header from './Header';
import Player from './Player';
import MenuBottom from './MenuBottom';

const Layout = ({ children }) => {
  const history = useHistory().location.pathname;

  return (
    <>
      {history === '/register' || history === '/login' || history === '/home' ? (
        <>{children}</>
      ) : (
          <>
            <Header />
            <SlideBar />
            <div className='content'>{children}</div>
            <Player />
            <MenuBottom />
          </>
        )}
    </>
  );
};

export default Layout;
