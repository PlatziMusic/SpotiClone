import React from 'react';
import SectionCard from '../components/Cards/SectionCard';
import SongResults from '../components/Search/SongResults';
import Card from '../components/Cards/Card';
import '../assets/styles/components/Results.scss';

const Results = () => {
  return (
    <section>

      <section className='songsContainer'>
        <SectionCard
          titleContainer='Songs'
        />
        <div className='songsContainer-results'>
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
          <SongResults
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            nameSong='Lo-Fi'
            nameArtist='Mxmtoon'
          />
        </div>
      </section>

      <section className='results'>
        <SectionCard
          titleContainer='Albums'
        />
        <div className='resultsContainer'>
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
        </div>
      </section>
      <section className='results'>
        <SectionCard
          titleContainer='Artist'
        />
        <div className='resultsContainer'>
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
        </div>
      </section>
      <section className='results'>
        <SectionCard
          titleContainer='Playlist'
        />
        <div className='resultsContainer'>
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
          <Card
            title='Vocal lofi'
            info='College Music'
            image='https://i.scdn.co/image/ab67706c0000bebbec37e37e29b21906afb31145'
            url='#'
          />
        </div>
      </section>
    </section>
  );
};

export default Results;