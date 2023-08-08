import React, { useState } from 'react';

const RatingFilter = ({ onFilterChange }) => {
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    onFilterChange(rating);
  };

  return (
    <div className="rating-filter">
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="rating-select"
      >
        <option value="">All Ratings</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
      <button onClick={handleFilterChange} className="filter-button">
        Apply Filter
      </button>
    </div>
  );
};

export default RatingFilter;