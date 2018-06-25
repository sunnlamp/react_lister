import _ from 'underscore';
import React from 'react';
import List from './List';

const Pagination = ({currentPage, quotesPerPage, lastMovieIndex,
  firstMovieIndex, movies, onPageSelect}) => {
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);
  // will provide a set amount of data to the QuotesList component according
  // to the page set
  return (
    <div>
      <List
        movies={currentMovies}
      />
    </div>
  )
}

export default Pagination;
