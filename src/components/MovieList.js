import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import Pagination from './Pagination';
import RatingFilter from './RatingFilter';

const MovieList = ({ apiKey, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredRating, setFilteredRating] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    if (searchQuery) {
      fetchMovies();
    }
  }, [apiKey, searchQuery, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRatingFilter = (rating) => {
    setFilteredRating(rating);
  };

  const filteredMovies = filteredRating
    ? movies.filter((movie) => movie.vote_average >= filteredRating)
    : movies;

  return (
    <div className="movie-list">
      <RatingFilter onFilterChange={handleRatingFilter} />
      <ul className="movies">
        {filteredMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MovieList;