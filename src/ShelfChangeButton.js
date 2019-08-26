import React from 'react';

const optionValues = {
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to read",
    "read": "Read",
    "none": "None"
}
//TODO: implement selected option is the current shelf that the book is on
function ShelfChangeButton(props){
    return (
        <select value={props.book.shelf} onChange={props.handleChange}>
            {Object.keys(optionValues).map((key) => (
                  props.book.shelf===undefined ? <option key={key} value={key}>{optionValues[key]}</option> :
                   <option key={key} value={key}>{optionValues[key]}</option>
            ))}
        </select>
    )

}

export default ShelfChangeButton
