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
      assignShelves(searchBooks, this.props.books)
      console.log('Search books', searchBooks)
      this.setState({
        books: searchBooks,
      })
    }
    )
  }

  render(){
    console.log(this.state.books)
     return (
       <div className="search-books">
         <SearchBar query={this.state.query} handleChange={this.handleChange} toggleSearchPage={this.props.toggleSearchPage} />
         <SearchResults books={this.state.books} changeShelf={this.props.changeShelf} />
       </div>
     )
  }
}

function assignShelves(searchBooks, booksWithShelves){
  for(const book of searchBooks){
    const index = booksWithShelves.findIndex((arg)=> arg[0]==book.id)
    if(index > -1){
      book.shelf = booksWithShelves[index][1]
    }
    else{
      book.shelf = 'none'
    }
  }
}

export default SearchPage
