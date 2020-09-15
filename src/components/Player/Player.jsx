import React from 'react';
import PlayerVolume from './PlayerVolume';
import PlayerInfo from './PlayerInfo';
import '../../assets/styles/components/Player.scss';

const Player = () => {
  return (
    <section className='player'>
      <PlayerInfo />
      <div className='player__progress'>Progress
      </div>
      <PlayerVolume />
    </section>
  );
};

export default Player;
