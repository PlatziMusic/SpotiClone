import React from 'react';
import UserHead from './UserHead';
import Card from './Card';

import '../assets/styles/components/ViewUser.scss';

const ViewUser = () => {
  return (
    <section>
      <UserHead
        caratula='https://junglamoderna.com/wp-content/uploads/2019/02/esta-persona-no-exist-297x300.jpg'
        type='Usuario'
        nameUser='Pedro Ramirez'
        numberPlaylist='16 playlist'
      />
      <h3 className='encabezado-playlist'>Playlist Publicas</h3>
      <div className='playlistCard-container'>
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
          image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
          title='Beacon'
          info='Two door cinema club'
        />
      </div>
    </section>
  );
};

export default ViewUser;