import _ from 'underscore';
import React, { Component } from 'react';
import './App.css';
import Pagination from './components/Pagination';

const BASEURL = "https://www.omdbapi.com/?s=";
const APIKEY =  "&apikey=trilogy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // flag to check if the content is loading
      isLoaded: false,
      // default search term
      searchTerm: "The Thing",
      // array to hold data the AJAX request returns
      movies: [],
      // starts the current page at 1 for paginatin
      currentPage: 1,
      // sets the movies per page
      moviesPerPage: 5
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  searchMovies(query) {

  }

  handleSearchSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    fetch(BASEURL + "The Thing" + APIKEY)
      .then(response => response.json())
      .then((data) => {
        console.log("this is the data" + data.Search);
        this.setState({
          isLoaded: true,
          // OMDB only allows the return of 10 results without
          // additional queries
          movies: data.Search
        })
        console.log(data.Search);
      })
  }

  render() {
    const { isLoaded, movies, currentPage, moviesPerPage } = this.state;
      // will provide the file index of the quotes for manipulating pagination
      const indexOfLastMovie = currentPage * moviesPerPage;
      // will provide the position of the first quote on a given page
      const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
      // const currentQuotes = _.toArray(this.state.quotes).slice(indexOfFirstQuote, indexOfLastQuote);

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
        pageNumbers.push(i);
      }

      // will render the total amount of page numbers based on
      // the amount of data retreived
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <button
            key={number}
            id={number}
            onClick={this.handlePageClick}
          >
            {number}
          </button>
        );
      });

      if (!isLoaded) {
        // Provides loading message while AJAX request acquires daata
        return <div>Loading..</div>
      } else {
        return (
          <div>
            <Pagination
              onPageSelect={selectedPage => this.setState({currentPage})}
              currentPage={currentPage}
              moviesPerPage={moviesPerPage}
              lastMovieIndex={indexOfLastMovie}
              firstMovieIndex={indexOfFirstMovie}
              movies={movies}
            />
            <div>{renderPageNumbers}</div>
          </div>
        )
      }
  }
}

export default App;
