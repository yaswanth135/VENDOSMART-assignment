import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h2 className="movie-title">{movie.title}</h2>
      <p className="release-date">Release Date: {movie.release_date}</p>
      <p className="rating">Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieItem;