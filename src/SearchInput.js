import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

function SearchInput(props){
  return(
    <div className="search-books-input-wrapper">
      <DebounceInput
       type="text"
       placeholder={props.placeholder}
       debounceTimeout={200}
       onChange={props.handleChange}
      />
    </div>
  )
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default SearchInput
