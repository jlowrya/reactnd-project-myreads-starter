import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchInput from './SearchInput'

function SearchBar(props){
  return (
    <div className="search-books-bar">
               <Link to='/'><button className="close-search">Close</button></Link>
               <SearchInput handleChange={props.handleChange} value={props.query} />
    </div>
  )
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string
}

export default SearchBar
