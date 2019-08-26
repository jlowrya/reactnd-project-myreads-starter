import React from 'react';
import PropTypes from 'prop-types'

import Book from './Book';

function SearchResults(props){
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {!Array.isArray(props.books) ? <p>No books were found matching that search criteria.</p> : props.books.map(book => (
            <Book key={book.id} book={book} changeShelf={props.changeShelf}/>
          ))}
        </ol>
      </div>
    )
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default SearchResults
