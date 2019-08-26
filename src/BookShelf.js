import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book.js';


function BookShelf(props){
  return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.map((book) => (
                <Book key={book.id} changeShelf={props.changeShelf} book={book}/>
              ))}
            </ol>
          </div>
        </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
}

export default BookShelf
