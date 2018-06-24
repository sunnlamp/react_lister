import React from 'react';

// receives three arugments to provide a <li> with relevant information
const ListItem = ({source, quote, context}) => {
  return (
    <li>
      <p>{source} from {context}. "{quote}" </p>
    </li>
  )
}

export default ListItem;
