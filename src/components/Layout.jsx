import React from 'react';
import { useHistory } from 'react-router-dom';
import SlideBar from './SlideBar';
import Header from './Header';
import Player from './Player';

const Layout = ({ children }) => {
  const history = useHistory().location.pathname;

  return (
    <>
      {history === '/register' || history === '/login' ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <SlideBar />
          <div className='content'>{children}</div>
          <Player />
        </>
      )}
    </>
  );
};

export default Layout;
