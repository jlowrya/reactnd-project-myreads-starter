import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {search} from './BooksAPI';

class SearchPage extends Component{
  state = {
    query: '',
    searchBooks: [],
  }

  handleChange = (query) => {
    // update local state
    this.setState({
      query
    })
    // if query do not exist set books to empty array
    if (!query) {
      this.setState({searchBooks: []})
      return
    }

    this.props.onSearchBooks(query).then(res => {
      if (res) {
        if(res.error) {
          this.setState({searchBooks: []})
        }else {
          this.setState(() => ({
            searchBooks: res
          }))
        }
      }
    })

  }

  render(){
    const searchedBooks = this.state.searchBooks.map(book => {
      const bookInShelf = this.props.books.find(b => b.id === book.id)
       return Object.assign({}, bookInShelf, book)
    })
    
     return (
       <div className="search-books">
         <SearchBar query={this.state.query}  handleChange={(event) => this.handleChange(event.target.value)}  />
         <SearchResults books={searchedBooks} changeShelf={this.props.changeShelf} />
       </div>
     )
  }
}

SearchPage.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

export default SearchPage
