import React, { useRef } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../assets/styles/components/Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ title, info, image, id }) => {
  const btn = useRef();

  console.log(id);
  return (
    <li
      key={!id ? 0 : id}
      className='card'
      onMouseEnter={() => {
        btn.current.className = 'active';
      }}
      onMouseLeave={() => {
        btn.current.className = null;
      }}
    >
      <Link to='/playlist/' className='card-link'>
        <section className='card__image'>
          <img src={image} alt='Imagen' />
        </section>
        <section className='card__info'>
          <div className='card__info--data'>
            <h2>{title}</h2>
            <p>{info}</p>
          </div>
          <div className='card__info--btn'>
            <button type='button' ref={btn}>
              <PlayArrowIcon className='PlayArrowIcon' />
            </button>
          </div>
        </section>
      </Link>
    </li>
  );
};

// ant design

export default Card;
