import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {search} from './BooksAPI';

class SearchPage extends Component{
  state = {
    query: '',
    books: [],
  }

  handleChange = (event) => {
    const query =  event.target.value
    console.log('query', query)
    this.setState({query})
    query==='' ? this.setState({books:[]}) :
    search(query).then(searchBooks =>{
      //handle invalid search term
      if(!Array.isArray(searchBooks)){
        this.setState({
          books: [],
        })
      }
      assignShelves(searchBooks, this.props.books)
      this.setState({
        books: searchBooks,
      })
    }
    )
  }

  render(){
     return (
       <div className="search-books">
         <SearchBar query={this.state.query} handleChange={this.handleChange} />
         <SearchResults books={this.state.books} changeShelf={this.props.changeShelf} />
       </div>
     )
  }
}

SearchPage.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

function assignShelves(searchBooks, booksWithShelves){
  if(!Array.isArray(searchBooks) || searchBooks.length===0){
    return
  }
  for(const book of searchBooks){
    const sameBook = booksWithShelves.find((arg) => arg[0]===book.id)
    console.log('sameBook', sameBook)
    sameBook === undefined ? book.shelf = 'none' : book.shelf = sameBook.shelf
  }
}

export default SearchPage
