import React from 'react';
import ShelfChangeButton from './ShelfChangeButton';

function Book(props){
  console.log(props)
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.image})`}}></div>
          <div className="book-shelf-changer">
            <ShelfChangeButton/>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors === undefined ? <br/>:props.authors.map(author => (
            author
          ))}</div>
      </div>
    )
}

export default Book
