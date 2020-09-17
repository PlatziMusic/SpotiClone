import React from 'react';
import PlayerVolume from './PlayerVolume';
import PlayerInfo from './PlayerInfo';
import PlayerAction from './PlayerAction';
import '../../assets/styles/components/Player.scss';

const Player = () => {
  return (
    <section className='player'>
      <PlayerInfo />
      <div className='player__progress'>
        <PlayerAction />
      </div>
      <PlayerVolume />
    </section>
  );
};

export default Player;
