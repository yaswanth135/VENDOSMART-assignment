import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const API_KEY = '50b56f28e27894c1707c5035d2d7104c';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <MovieList apiKey={"50b56f28e27894c1707c5035d2d7104c"} searchQuery={searchQuery} />
    </div>
  );
};

export default App;