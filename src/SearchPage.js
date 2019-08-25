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

export default SearchPage
