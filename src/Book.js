import React, {Component} from 'react';
import ShelfChangeButton from './ShelfChangeButton';

const noImage = {
  textAlign: 'center',
  fontWeight: 'bold'
}

class Book extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const shelf =  event.target.value
    this.props.changeShelf(this.props.book, shelf)
  }

   render(){
     const image = this.props.book.imageLinks ? `url(${this.props.book.imageLinks["smallThumbnail"]})`: undefined
     return (
         <div className="book">
         <div className="book-top">
           <div className="book-cover" style={{display: 'grid', width: 128, height: 193, backgroundImage: image, alignItems: 'center'}}>
             {image===undefined ? <p style={noImage}>Image unavailable</p>:''}</div>
           <div className="book-shelf-changer">
             <ShelfChangeButton book={this.props.book} handleChange={this.handleChange}/>
           </div>
         </div>
         <div className="book-title">{this.props.book.title}</div>
         <div className="book-authors">{this.props.book.authors === undefined ? <br/>:this.props.book.authors.join(', ')}</div>
       </div>
     )
   }
}




export default Book
