import _ from 'underscore';
import React from 'react';
import QuotesList from './QuotesList';

const Pagination = ({currentPage, quotesPerPage, lastQuoteIndex,
  firstQuoteIndex, quotes, onPageSelect}) => {
  const currentQuotes = _.toArray(quotes).slice(firstQuoteIndex, lastQuoteIndex);

  // will provide a set amount of data to the QuotesList component according
  // to the page set
  return (
    <div>
      <QuotesList
        quotes={currentQuotes}
      />

    </div>
  )
}

export default Pagination;
