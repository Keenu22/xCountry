import React, { useEffect, useState } from 'react';
import './CardPart.css';

export default function CardPart({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter data to match countries whose names contain the search term (case-insensitive)
  const filteredData = debouncedSearchTerm
    ? data.filter(item =>
        item.name.trim().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : data;

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search for countries"
        aria-label="Search for countries"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="container">
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
}
