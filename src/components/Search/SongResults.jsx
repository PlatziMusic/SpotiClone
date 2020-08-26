import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/SongResults.scss';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const SongResults = ({ image, nameSong, nameArtist }) => {
  return (
    // <section className='songsContainer-results'>
    <div className='song'>
      <div className='song-image'>
        <img src={image} alt='img' />
      </div>
      <div className='song-Details'>
        <h3>{nameSong}</h3>
        <p>{nameArtist}</p>
      </div>
      <div className='song-more'>
        <Link to='#'><MoreHorizIcon /></Link>
      </div>
    </div>
    // </section>
  );
};

export default SongResults;
