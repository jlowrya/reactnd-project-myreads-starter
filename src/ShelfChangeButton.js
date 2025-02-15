import React from 'react';
import PropTypes from 'prop-types';

const optionValues = {
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to read",
    "read": "Read",
    "none": "None"
}


function ShelfChangeButton(props){
    return (
        <select value={props.book.shelf===undefined ? "none" : props.book.shelf} onChange={props.handleChange}>
            {Object.keys(optionValues).map((key) => (
                   <option key={key} value={key}>{optionValues[key]}</option>
            ))}
        </select>
    )
}

ShelfChangeButton.propTypes = {
  book: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default ShelfChangeButton
