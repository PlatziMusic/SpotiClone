import React from 'react';
import Song from '../Songs/Song';
import Card from '../Cards/Card';

const ArtistDiscography = () => {
  return (
    <>
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
      </section>

      <section className='playlistCard-container'>
        <Card
          url='/album'
          image='https://i.scdn.co/image/ab67616d00001e021eada1495a082da8a6c3e516'
          title='Aztlán'
          info='Zoé'
        />
        <Card
          image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
          title='Oracular Spectacular'
          info='MGMT'
        />
        <Card
          image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
          title='Conratulations'
          info='MGMT'
        />
        <Card
          image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
          title='Tourist History'
          info='Two door cinema club'
        />
        <Card
          image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
          title='Beacon'
          info='Two door cinema club'
        />
        <Card
          image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
          title='Little Dark Age'
          info='MGMT'
        />
      </section>
    </>
  );
};

export default ArtistDiscography;