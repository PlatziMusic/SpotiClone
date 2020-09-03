import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Search.scss';

const Search = ({ nameGender, imageGender }) => {
  return (
    <section className='search'>
      <section className='searchGenders'>
        <h2>Explorar todo</h2>
        <div className='searchGenders-container'>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
          <Link to='/' className='cardGenders'>
            {/* <h3>{nameGender}</h3> */}
            <img src={imageGender} alt={imageGender} />
          </Link>
        </div>
      </section>

    </section>
  );
};

export default Search;

