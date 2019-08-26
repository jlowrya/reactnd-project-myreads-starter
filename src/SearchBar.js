import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchBar(props){
  return (
    <div className="search-books-bar">
               <Link to='/'><button className="close-search">Close</button></Link>
               <div className="search-books-input-wrapper">
                 <input type="text" placeholder="Search by title or author" onChange={props.handleChange} value={props.query}/>
               </div>
      </div>
  )
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string
}

export default SearchBar
