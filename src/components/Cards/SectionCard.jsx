import React from 'react';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../../assets/styles/components/Card.scss';
// import Card from './Card';
// import { Link } from 'react-router-dom';

const SectionCard = ({ titleContainer }) => {
  return (
    <section className='containerCard'>
      <div className='containerCard-head'>
        <h1>{titleContainer}</h1>
        {/* <Link to='/'>Ver más</Link> */}
      </div>
    </section>
  );
};

export default SectionCard;
