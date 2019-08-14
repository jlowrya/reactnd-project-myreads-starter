import React from 'react';
import Book from './Book';

function SearchResults(props){
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {!Array.isArray(props.books) ? <br/> : props.books.map(book => (
            <Book title={book.title} authors={book.authors} image={book.imageLinks["smallThumbnail"]}/>
          ))}
        </ol>
      </div>
    )
}

export default SearchResults
