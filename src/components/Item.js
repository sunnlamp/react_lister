import React from 'react';

// receives three arugments to provide a <li> with relevant information
const Item = ({title, year, poster}) => {
  return (
    <li>
      <p>{title} from {year}.</p>
      <img src={poster}/>
    </li>
  )
}

export default Item;
