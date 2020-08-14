import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums } from '../redux';
import Card from '../components/Card';
import SectionCard from '../components/SectionCard';
import '../assets/styles/components/Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return albums.loading ? (<h2>Loading</h2>) :
    albums.error ?
      (<h2>{albums.error}</h2>) :
      (
        <>
          <section className='uno'>
            <SectionCard titleContainer='Recomendaciones' />
            <ul className='test'>
              {
                albums &&
                  albums.album &&
                    albums.album.map((album) => <Card id={album.id} image={album.image} title={album.name} info={album.artists} />)
              }
            </ul>
          </section>
        </>
      );

  // return (
  //   <>
  //     <section className='uno'>
  //       <SectionCard
  //         titleContainer='Recomendaciones'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='dos'>
  //       <SectionCard
  //         titleContainer='Tus favoritas'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='tres'>
  //       <SectionCard
  //         titleContainer='Lo mas nuevo'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='cuatro'>
  //       <SectionCard
  //         titleContainer='Tarde Soleada'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='cinco'>
  //       <SectionCard
  //         titleContainer='Vuelve a escuhar'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='seis'>
  //       <SectionCard
  //         titleContainer='Viejitas pero romanticas'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='siete'>
  //       <SectionCard
  //         titleContainer='Modo sad'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //     <section className='ocho'>
  //       <SectionCard
  //         titleContainer='Para el atardecer'
  //       />
  //       <section className='test'>
  //         <Card
  //           image='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg'
  //           title='Little Dark Age'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg'
  //           title='Oracular Spectacular'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg'
  //           title='Conratulations'
  //           info='MGMT'
  //         />
  //         <Card
  //           image='https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg'
  //           title='Tourist History'
  //           info='Two door cinema club'
  //         />
  //         <Card
  //           image='https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg'
  //           title='Beacon'
  //           info='Two door cinema club'
  //         />
  //       </section>
  //     </section>
  //   </>
  // );
};

export default Home;
