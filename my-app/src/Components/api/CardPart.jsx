import React, { useEffect, useState } from 'react';
import './CardPart.css';

export default function CardPart({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms debounce delay
    // Clean up the timeout if searchTerm changes within the 300ms delay
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter data to only show exact matches
  const filteredData = data.filter(item =>
    item.name.toLowerCase() === debouncedSearchTerm.toLowerCase()
  );

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search for countries"
        aria-label="Search for countries"
        value={searchTerm} // two-way binding
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as the user types
      />
      <div className="container">
        {filteredData.map((item) => (
          <div key={item.name} className="countryCard">
            <div className="card">
              <div className="imageWrapper">
                <img src={item.flag} alt={`Flag of ${item.name}`} />
              </div>
              <div className="content">
                <h6>{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
