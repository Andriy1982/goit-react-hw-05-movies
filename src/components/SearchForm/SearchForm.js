import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import notification from '../Notification';
import './SearchForm.scss';

function SearchForm({ onSubmitForm }) {
  const [searchMovie, setSearchMovie] = useState('');

  const handleInputChange = e => {
    setSearchMovie(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchMovie.trim() === '') {
      store.addNotification({
        ...notification,
        container: 'bottom-center',
        message: 'Enter a name for the movie',
      });
      return;
    }
    onSubmitForm(searchMovie);
    setSearchMovie('');
  };

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        onChange={handleInputChange}
        value={searchMovie}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
}

export default SearchForm;
