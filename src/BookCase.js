import React from 'react';
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
