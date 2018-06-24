import React from 'react';
import ListItem from './ListItem';

// this component uses a smaller component to map
// all the items of the array into a <li>, returning them
// then placing them into a ul
const QuotesList = (props) => {
  const quotesItems = props.quotes.map((quote, index) => {
    return (
      <ListItem
        key={index}
        source={quote.source}
        quote={quote.quote}
        context={quote.context}
      />
    )
  })

  return (
    <ul>
      {quotesItems}
    </ul>
  )
}

export default QuotesList;
