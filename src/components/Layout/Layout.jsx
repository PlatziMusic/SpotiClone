import React from 'react';
import { useLocation } from 'react-router-dom';
import SlideBar from './SlideBar';
import Header from './Header';
import Player from '../Player/Player';
import MenuBottom from '../Search/MenuBottom';
const Layout = ({ children }) => {
  const location = useLocation().pathname;

  return (
    <>
      {location === '/register' || location === '/login' || location === '/home' ? (
        <>{children}</>
      ) : (
          <>  
            {
              location === '/search' ?
                <Header isSearch={true} /> : 
                <Header isSearch={false} />
            }
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
