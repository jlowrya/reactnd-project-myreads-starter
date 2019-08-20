import React from 'react';

const optionValues = {
    "move*disabled": "Move to...",
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
                key.includes("*disabled") ? <option value={key.replace('*disabled','')} disabled>{optionValues[key]}</option>: key===props.book.shelf ?
                <option value={key} selected>{optionValues[key]}</option> : <option value={key}>{optionValues[key]}</option>
            ))}
        </select>
    )

}

export default ShelfChangeButton
