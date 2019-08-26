import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

function BookCase(props){
  return(
    <div className="list-books">
      <div className="list-books-content">
        <div>
          {props.shelves.map(shelf => (
            <BookShelf key={shelf} changeShelf={props.changeShelf} name={getShelfName(shelf)} books={props.books.filter((book)=>book.shelf===shelf)} />
          ))}
        </div>
      </div>
    </div>
  )

}

BookCase.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

function getShelfName(shelfName){
    if(shelfName==='read'){
      return 'Read'
    }
    else if(shelfName==='currentlyReading'){
      return 'Currently Reading'
    }
    else return 'Want to read'
}

export default BookCase
