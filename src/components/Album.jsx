import React from 'react';
import '../assets/styles/components/Playlist.scss';

import AlbumHead from './AlbumHead';
import Song from './Song';

const Album = () => {
  return (
    <section className='playlist'>
      <AlbumHead
        caratula='https://i.scdn.co/image/ab67616d00001e021eada1495a082da8a6c3e516'
        type='ÁLBUM'
        nameAlbum='Aztlán'
        imageArtist='https://i.scdn.co/image/aa2fa92d55cd2afee5fbe811c3a4e282c8d10cea'
        linkArtist='Zoé'
        duration='• 2018 • 55 min 1 seg'
      />
      <section className='songs'>
        <Song
          nameSong='Venus'
          nameArtist='Zoé'
          duration='4:14'
        />
        <Song
          nameSong='Azul'
          nameArtist='Zoé'
          duration='3:14'
        />
        <Song nameSong='No hay mal que dure' nameArtist='Zoé' duration='4:52' />
        <Song
          nameSong='Al final'
          nameArtist='Zoé'
          duration='4:34'
        />
        <Song nameSong='Hielo' nameArtist='Zoé' duration='5:02' />
        <Song nameSong='Luci' nameArtist='Zoé' duration='4:07' />
        <Song nameSong='Aztlan' nameArtist='Zoé' duration='3:39' />
        <Song
          nameSong='Temor y temblor'
          nameArtist='Zoé'
          duration='5:28'
        />
        <Song
          nameSong='Renacer'
          nameArtist='Zoé'
          duration='6:14'
        />
        <Song nameSong='Ella es magia' nameArtist='Zoé' duration='4:08' />
        <Song
          nameSong='Oropel'
          nameArtist='Zoé'
          duration='4:21'
        />
        <Song
          nameSong='Clarividad'
          nameArtist='Zoé'
          duration='5:03'
        />
      </section>
    </section>
  );
};

export default Album;
