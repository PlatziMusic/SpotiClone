import React from 'react';
import '../assets/styles/components/Playlist.scss';

import PlaylistHead from '../components/PlaylistHead';
import Song from '../components/Song';

// import { Link } from 'react-router-dom';
// import '../components/Icons';

const Playlist = () => {
  return (
    <section className='playlist'>
      <PlaylistHead
        caratula='https://i.scdn.co/image/ab67616d00001e0201e2ebfbf4f8147621c8a866'
        type='PLAYLIST'
        namePlaylist='Vampire Weekend'
        imageArtist='https://i.scdn.co/image/5390ca6bd240b2a15b71868d1d105c3d6a7a7b17'
        linkArtist='Pedro Ramirez'
        duration='• 2008 • 34 min 18 seg'
      />
      <section className='songs'>
        <Song
          nameSong='This Life'
          nameArtist='Vampire Weekend'
          duration='4:07'
        />
        <Song
          nameSong='Harmony Hall'
          nameArtist='Vampire Weekend'
          duration='3:15'
        />
        <Song nameSong='A-punk' nameArtist='Vampire Weekend' duration='2:17' />
        <Song
          nameSong='Oh baby'
          nameArtist='LCD Soundsystem'
          duration='3:34'
        />
        <Song nameSong='Step' nameArtist='Vampire Weekend' duration='4:15' />
        <Song nameSong='I Can Change' nameArtist='LCD Soundsystem' duration='2:56' />
        <Song nameSong='Bryn' nameArtist='Vampire Weekend' duration='2:13' />
        <Song
          nameSong='Good Luck'
          nameArtist='Broken Bells'
          duration='3:13'
        />
        <Song
          nameSong='Shelter'
          nameArtist='Broken Bells'
          duration='2:39'
        />
        <Song nameSong='Inside Out' nameArtist='Spoon' duration='3:41' />
        <Song
          nameSong='No Bullets Spent'
          nameArtist='Spoon'
          duration='4:03'
        />
      </section>
    </section>
  );
};

export default Playlist;
