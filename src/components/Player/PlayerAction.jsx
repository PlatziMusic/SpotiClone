import React from 'react';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayerProgress from './PlayerProgress';

const PlayerAction = () => {
  return (
    <>
      <section className='player__action'>
        <SkipPreviousIcon className='player__action-button' />
        <PlayCircleOutlineIcon className='player__action-button' />
        <SkipNextIcon className='player__action-button' />
      </section>
      <section className='container__progress'>
        <PlayerProgress color='white' />
      </section>
    </>
  );
};

export default PlayerAction;
