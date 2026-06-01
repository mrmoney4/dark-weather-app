import React from 'react';
import './SearchForm.css';

function SearchForm({ query, onQueryChange, onSearch, loading }) {
  return (
    <form onSubmit={onSearch} className='search-form'>
      <input
        type='text'
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder='Search city'
        aria-label='Search city'
      />
      <button type='submit' disabled={loading}>
        {loading ? 'Searching…' : 'Search'}
      </button>
    </form>
  );
}

export default SearchForm;
