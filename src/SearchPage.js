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
    search(query).then(searchBooks =>(
      this.setState({
        books: searchBooks,
      })
    ))
  }

  render(){
     return (
       <div className="search-books">
         <SearchBar query={this.state.query} handleChange={this.handleChange}/>
         <SearchResults books={this.state.books} />
       </div>
     )
  }
}

export default SearchPage
