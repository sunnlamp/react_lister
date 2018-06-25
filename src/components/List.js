import React from 'react';
import Item from './Item';

// this component uses a smaller component to map
// all the items of the array into a <li>, returning them
// then placing them into a ul
const List = (props) => {
  const items = props.movies.map((movie, index) => {
    return (
      <Item
        key={index}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
      />
    )
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

export default List;
