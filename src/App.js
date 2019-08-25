import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import {getAll, update} from './BooksAPI'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      // get the location of the book
      if(book.shelf===undefined){
        return {
          books: [
            ...currentState.books,
            Object.assign({}, book, { shelf })
          ]
        }
      }
      const location = currentState.books.findIndex(toUpdate => toUpdate.id === book.id);
      if (location !== -1) {
        return {
          books: [
            ...currentState.books.slice(0, location),
            Object.assign({}, currentState.books[location], { shelf }),
            ...currentState.books.slice(location + 1)
          ]
        };
      }
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
            toggleSearchPage={this.toggleSearchPage}
            changeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
                history.push('/')
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
