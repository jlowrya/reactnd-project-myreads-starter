import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './Header'
import BookCase from './BookCase';

function MainPage(props){
  return(
    <div>
        <Header title='My MyReads App' />
        <BookCase shelves={props.shelves} books={props.books} changeShelf={props.changeShelf}/>
        <div className="open-search"><Link to='search'>Add a book</Link></div>
     </div>
  )
}

MainPage.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default MainPage
