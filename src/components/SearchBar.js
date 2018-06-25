import React from 'react';

const SearchBar = (props) => {
  return (
    <form className="form-control">
      <div>
        <label>Search for a film</label>
        <input
          className="form-control"
          onChange={props.handleInputChange}
          value={props.value}
          name="searchTerm"
          type="text"
        />
        <button
          className="btn btn-primary"
          onClick={props.handleSearchSubmit}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar;
