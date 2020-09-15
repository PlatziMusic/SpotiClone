import React from 'react';
import '../../assets/styles/components/AlbumHead.scss';
import {Link} from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const AlbumHead = ({
  idArtist,
  caratula,
  nameAlbum,
  nameArtist,
  duration,
  year,
}) => {
  return (
    <section>
      <div className='playlist-head'>
        <div className='playlist-head-image'>
          <img src={caratula} alt='hola' />
        </div>
        <div className='playlist-head-details'>
          <h5>ALBUM</h5>
          <h1>{nameAlbum}</h1>
          <div className='metadatos'>
            <Link to={`/artist/${idArtist}`}>{nameArtist}</Link>
            {/* <Link to={`/artist/${idArtist}/`}>{nameArtist}</Link> */}
            <p>
              &nbsp; • {year} • {duration}
            </p>
          </div>
        </div>
      </div>

      <div className='playlist-options'>
        <button type='button' className='play'>
          <PlayArrowIcon className='icon' />
        </button>
        <button type='button' className='like'>
          <FavoriteBorderIcon className='icon icon-like' />
        </button>
        <button type='button' className='more'>
          <MoreHorizIcon className='icon' />
        </button>
      </div>
    </section>
  );
};

export default AlbumHead;
