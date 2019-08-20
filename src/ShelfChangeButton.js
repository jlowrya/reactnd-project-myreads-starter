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
        <select onChange={props.handleChange}>
            {Object.keys(optionValues).map((key) => (
                key===props.book.shelf ?
                <option value={key} selected>{optionValues[key]}</option> :
                  props.book.shelf===undefined ? <option value={key} selected>{optionValues[key]}</option> :
                   <option value={key}>{optionValues[key]}</option>
            ))}
        </select>
    )

}

export default ShelfChangeButton
