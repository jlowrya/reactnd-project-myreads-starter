import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {search} from './BooksAPI';

class SearchPage extends Component{
  state = {
    query: '',
    books: []
  }

  componentDidMount(){
    search(this.state.query).then((books) => this.setState({
      books
    }))
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  render(){
    console.log(this.state.books)
     return (
       <div className="search-books">
         <SearchBar query={this.state.query} handleChange={this.handleChange}/>\

       </div>
     )
  }
}

export default SearchPage
