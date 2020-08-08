import React from 'react';
import '../assets/styles/components/UserHead.scss';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// import '../components/Icons';

const UserHead = ({
  caratula,
  type,
  nameUser,
  numberPlaylist,
}) => {
  return (
    <section>
      <div className='playlist-userHead'>
        <div className='playlist-userHead-image'>
          <img src={caratula} alt='image-Album' />
        </div>
        <div className='playlist-userHead-details'>
          <h5>{type}</h5>
          <h1>{nameUser}</h1>
          <div className='metadatos'>
            <p>{numberPlaylist}</p>
          </div>
        </div>
      </div>

      {/* <div className='playlist-options'>
        <button type='button' className='more'>
          <MoreHorizIcon className='icon' />
        </button>
      </div> */}
    </section>
  );
};

export default UserHead;