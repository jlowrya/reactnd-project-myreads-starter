import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import {getAll, update} from './BooksAPI'
import SearchPage from './SearchPage'
import MainPage from './MainPage'


const shelfNames = ['currentlyReading', 'wantToRead', 'read']

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount(){
    getAll().then(books => this.setState({
      books
    }))
  }

changeShelf = (book, shelf) => {
  update(book, shelf).then(() => {
    this.setState(currentState => {
      book.shelf = shelf
      if(book.shelf===undefined){
        return {
          books: [
            ...currentState.books,
            book
          ]
        }
      }
        return {
          books: [
            ...currentState.books.filter((b) => b.id!==book.id),
            book
          ]
        };
    });
  });
};

  render(){
    return(
      <Router>
      <div className="app">
      <Route exact path='/' render={() => (
          <MainPage shelves={shelfNames} books={this.state.books} changeShelf={this.changeShelf} />
        )} />
      <Route path='/search' render={({ history }) => (
          <SearchPage
            books={this.state.books.map((book)=>[book.id, book.shelf])}
            changeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
              }
            }
          />
        )}/>
    </div>
    </Router>
    )
  }
}
export default BooksApp
