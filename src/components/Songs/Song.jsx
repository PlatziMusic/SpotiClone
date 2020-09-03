import React from 'react';
import '../../assets/styles/components/Song.scss';
import { Link } from 'react-router-dom';
import SubMenu from '../Menu/SubMenu';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Song = ({ nameSong, nameArtist, duration }) => {
  return (
    <div className='tracklist'>
      <div className='song'>
        <div className='song-button'>
          <button type='button'>
            <PlayArrowIcon
              className='icon icon-songPlay'
              style={{ fontSize: 40 }}
            />
          </button>
        </div>
        <div className='song-details'>
          <div className='song-details-titles'>
            <p>{nameSong}</p>
            <Link to='/'>{nameArtist}</Link>
          </div>
          <div className='song-details-more'>
            <button type='button'>
              <SubMenu />
            </button>
          </div>
        </div>
        <div className='song-duration'>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
