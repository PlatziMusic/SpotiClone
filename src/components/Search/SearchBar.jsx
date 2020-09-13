import React from 'react';
import '../../assets/styles/components/Header.scss';

// const SearchBar = () => {
//   return (
//     <div className='searchBar'>
//       <input type='searchBar-input' name='search' id='Seacrh' />
//     </div>
//   );
// };

const people = [
  // 'Siri',
  // 'Alexa',
  // 'Google',
  // 'Facebook',
  // 'Twitter',
  // 'Linkedin',
  // 'Sinkedin',
];
function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className='searchBar'>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
