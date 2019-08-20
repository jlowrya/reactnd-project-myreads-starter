import React from 'react';
import Book from './Book';

function SearchResults(props){
  if(props.books.length>0){
    console.log(props.books[0].shelf)
  }

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {!Array.isArray(props.books) ? <br/> : props.books.map(book => (
            <Book book={book} changeShelf={props.changeShelf}/>
          ))}
        </ol>
      </div>
    )
}

export default SearchResults
