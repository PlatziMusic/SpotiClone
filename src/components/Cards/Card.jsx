import React, {useRef} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../../assets/styles/components/Card.scss';
import {Link} from 'react-router-dom';

const Card = ({title, info, image, id}) => {
  const btn = useRef();
  return (
    <section
      className='card'
      onMouseEnter={() => {
        btn.current.className = 'active';
      }}
      onMouseLeave={() => {
        btn.current.className = null;
      }}
    >
      <Link to={`/Album/${id}`} className='card-link'>
        <section className='card__image'>
          <img src={image} alt='Imagen' />
        </section>
        <section className='card__info'>
          <div className='card__info--data'>
            <div className='card__info--data-Title'>
              <h2>{title}</h2>
            </div>
            <p>{info}</p>
          </div>
          <div className='card__info--btn'>
            <button type='button' ref={btn}>
              <PlayArrowIcon className='PlayArrowIcon' />
            </button>
          </div>
        </section>
      </Link>
    </section>
  );
};

export default Card;
