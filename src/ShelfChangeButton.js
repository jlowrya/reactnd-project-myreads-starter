import React from 'react';

const optionValues = {
    "move*disabled": "Move to...",
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to read",
    "read": "Read",
    "none": "None"
}

function ShelfChangeButton(props){
    return (
        <select>
            {Object.keys(optionValues).map((key) => (
                key.includes("*disabled") ? <option value={key.replace('*disabled','')} disabled>{optionValues[key]}</option>:
                <option value={key}>{optionValues[key]}</option>
            ))}
        </select>
    )
   
}

export default ShelfChangeButton