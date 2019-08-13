import React from 'react';
import Book from './Book';

function SearchResults(props){
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book title={book.title} author={book.author} backgroundImage={book.backgroundImage} />
          ))}
        </ol>
      </div>
    )
}

export default SearchResults
