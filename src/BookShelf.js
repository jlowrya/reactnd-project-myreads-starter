import React from 'react';
import Book from './Book.js';


function BookShelf(props){
  console.log(props.books)
  return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.map((book) => (
                <Book title={book.title} authors={book.authors} previewLink={book.previewLink} />
              ))}
            </ol>
          </div>
        </div>
  )
}

export default BookShelf
