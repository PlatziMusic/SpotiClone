import React from 'react';
import '../../assets/styles/components/Card.scss';

const SectionCard = ({ titleContainer }) => {
  return (
    <section className='containerCard'>
      <div className='containerCard-head'>
        <h1>{titleContainer}</h1>
      </div>
    </section>
  );
};

export default SectionCard;
