import React from 'react';
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

export default SearchResults
