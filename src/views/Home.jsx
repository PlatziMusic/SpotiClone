import React from 'react';
import Card from '../components/Card';
import SlideBar from "../components/SlideBar";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import Player from "../components/Player";
// import Playlist from "../views/Playlist";
import '../assets/styles/components/Home.scss';

const Home = () => {
  return (
    <>
      <section className="1">
        <SectionCard
          titleContainer="Recomendaciones"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="2">
        <SectionCard
          titleContainer="Tus favoritas"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="3">
        <SectionCard
          titleContainer="Lo mas nuevo"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="4">
        <SectionCard
          titleContainer="Tarde Soleada"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="5">
        <SectionCard
          titleContainer="Vuelve a escuhar"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="6">
        <SectionCard
          titleContainer="Viejitas pero romanticas"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="7">
        <SectionCard
          titleContainer="Modo sad"
        />
        <section className='test'>
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
        </section>
      </section>
      <section className="8">
        <SectionCard
          titleContainer="Para el atardecer"
        />
        <section className='test'>
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
        </section>
      </section>
    </>
  );
};

export default Home;

