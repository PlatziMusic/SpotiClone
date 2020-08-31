import React from 'react';
import Card from '../components/Cards/Card';
import SectionCard from '../components/Cards/SectionCard';

import '../assets/styles/components/Home.scss';
import '../assets/styles/components/Carrusel.scss';

import { useRedux } from '../hooks/home';

const Home = () => {
  const albums = useRedux();

  return albums.loading ? (<h2>Loading</h2>) :
    albums.error ?
      (<h2>{albums.error}</h2>) :
      (
        <>
          <section className='results-Container carrusel'>
            <SectionCard titleContainer='Songs' />
            <section className='results carrusel-container'>
              <div className='resultsContainer carrusel-cards'>
                {
                  albums &&
                  albums.albums &&
                  albums.albums.map((album) => <Card key={album.id} id={album.id} image={album.image} title={album.name_Album} info={album.name_Artist} />)
                }
              </div>
            </section>
          </section>
        </>
      );
};

export default Home;
