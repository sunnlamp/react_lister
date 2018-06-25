import React from 'react';

const SearchBar = (props) => (
  <form>
    <label>Search</label>
    <input
      onChange={props.handleInputChange}
      value={props.value}
      name="search"
      type="text"
    />
    <button
      onClick={props.handleSearchSubmit}
    >
      Search
    </button>
  </form>
)
