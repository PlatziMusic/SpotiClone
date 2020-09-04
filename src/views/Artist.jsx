import React from 'react';
import PlaylistHead from '../components/Playlist/PlaylistHead';
import Song from '../components/Songs/Song';
import Card from '../components/Cards/Card';
import '../assets/styles/components/Card.scss';

const Artist = () => {
  return (
    <section className='artist'>
      <PlaylistHead
        caratula='https://i.scdn.co/image/85c6b87d4fa4a2196bf420ddbfa3f7660a33feb1'
        type='Artist'
        metadatos=''
        namePlaylist='Mon Laferte'
        duration='4.127.998 oyentes mensuales'
      />

      <h2 className='sectionArtist-head'>Populares</h2>
      <section className='songs'>
        <Song
          nameSong='Tu falta de querer'
          nameArtist='Mon Laferte'
          duration='4:38'
        />
        <Song
          nameSong='Amárrame'
          nameArtist='Mon Laferte'
          duration='3:27'
        />
        <Song nameSong='Mi Buen Amor' nameArtist='Mon Laferte' duration='3:47' />
        <Song
          nameSong='Amor Completo'
          nameArtist='Mon Laferte'
          duration='4:01'
        />
        <Song nameSong='Plata Ta Tá' nameArtist='Mon Laferte' duration='4:15' />
      </section>

      <h2 className='sectionArtist-head'>Populares</h2>
      <section className='playlistCard-container'>
        <Card
          url='/album'
          image='https://i.scdn.co/image/ab67616d00001e0207230fef59bb71c5011fe732'
          title='Sola Con Mis Monstruos'
          info='Mon Laferte'
        />
        <Card
          image='https://i.scdn.co/image/ab67616d00001e028ead7923c0e1ff38683d5503'
          title='Norma'
          info='Mon Laferte'
        />
        <Card
          image='https://i.scdn.co/image/ab67616d00001e026c303804ba7fe053607fe8c6'
          title='La Trenza (Deluxe)'
          info='Mon Laferte'
        />
        <Card
          image='https://i.scdn.co/image/ab67616d00001e02ac6e52ed084e8209691f208f'
          title='La Trenza'
          info='Mon Laferte'
        />
        <Card
          image='https://i.scdn.co/image/ab67616d00001e027a9c61e7c19a07afe65a3c9d'
          title='Mon Laferte (Vol 1/Edicion Especial)'
          info='Mon Laferte'
        />
        <Card
          image='https://i.scdn.co/image/ab67616d00001e025eebf3f8ec6e9807105f3151'
          title='Mon Laferte (Vol 1)'
          info='Mon Laferte'
        />
      </section>
    </section>
  );
};

export default Artist;