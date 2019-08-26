import React, { Component } from 'react';
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
         <SearchBar query={this.state.query} handleChange={this.handleChange} toggleSearchPage={this.props.toggleSearchPage} />
         <SearchResults books={this.state.books} changeShelf={this.props.changeShelf} />
       </div>
     )
  }
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
