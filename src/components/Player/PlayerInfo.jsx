import React from 'react'

const PlayerInfo = () => {
  return (
    <section className='player__info'>
      <section className='player__info--data'>
        <img src='https://images-na.ssl-images-amazon.com/images/I/61wEB21A-CL._AC_SY400_.jpg' alt='band'/>
        <section className="info">
          <section className="title">
            <h4>Space Oddity</h4>
          </section>
          <p>David Bowie</p>
        </section>
      </section> 
    </section>
  );
};

export default PlayerInfo;
