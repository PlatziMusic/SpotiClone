import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbum } from '../redux';
import { useParams } from 'react-router-dom';
import AlbumHead from '../components/Album/AlbumHead';
import Song from '../components/Songs/Song';

import '../assets/styles/components/Playlist.scss';

const Album = () => {
  const history = useParams().id;
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const { image, name_Album, name_Artist, duration, year, songs } = albums.album;

  useEffect(() => {
    dispatch(fetchAlbum(history));
  }, []);

  return (
    <section className='playlist'>
      <AlbumHead
        caratula={image}
        nameAlbum={name_Album}
        linkArtist={name_Artist}
        duration={duration}
        year={year}
      />
      <section className='songs'>
        {
          songs &&
            songs.map(song => <Song key={song.id} nameSong={song.name} nameArtist={name_Artist} duration={song.duration} />)
        }
      </section>
    </section>
  );
};

export default Album;
