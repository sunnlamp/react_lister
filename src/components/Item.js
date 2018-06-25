import React from 'react';

// receives three arugments to provide a <li> with relevant information
const Item = ({title, year, poster}) => {
  return (
    <li className="list-group-item">
      <p>{title} from {year}.</p>
      <img className="img-thumbnail" src={poster}/>
    </li>
  )
}

export default Item;
