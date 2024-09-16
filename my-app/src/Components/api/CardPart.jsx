import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce'; // Ensure you have this package installed
import './CardPart.css';
const CardPart = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Set to 300ms

  // Handle search term changes with debounce
  useEffect(() => {
    // No additional effect needed if using useDebounce
  }, [debouncedSearchTerm]);

  // Filter data based on debounced search term
  const filteredData = debouncedSearchTerm
    ? data.filter(item =>
        item.name.trim().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : data;

  return (
    <>
      <input
       className='search'
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <div className='container'>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div key={`${item.name}-${index}`} className="countryCard">
            <div className="card">
              <div className="imageWrapper">
                <img src={item.flag} alt={`Flag of ${item.name}`} />
              </div>
              <div className="content">
                <h6>{item.name}</h6>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No countries found.</p>
      )}
    </div>
    </>
  );
};

export default CardPart;
