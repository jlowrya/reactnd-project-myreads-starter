import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

function SearchInput(props){
  return(
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author" onChange={props.handleChange} value={props.query}/>
    </div>
  )
}

export default SearchInput
