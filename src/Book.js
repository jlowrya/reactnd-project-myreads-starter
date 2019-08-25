import React, {Component} from 'react';
import ShelfChangeButton from './ShelfChangeButton';

class Book extends Component{
  constructor(props){
    super(props)
    this.state = {
      shelf: this.props.book.shelf,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const shelf =  event.target.value

    this.setState({shelf})
    this.props.changeShelf(this.props.book, shelf)
  }

   render(){
     return (
         <div className="book">
         <div className="book-top">
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks["smallThumbnail"]})`}}></div>
           <div className="book-shelf-changer">
             <ShelfChangeButton book={this.props.book} handleChange={this.handleChange}/>
           </div>
         </div>
         <div className="book-title">{this.props.book.title}</div>
         <div className="book-authors">{this.props.book.authors === undefined ? <br/>:this.props.book.authors.map(author => (
             author
           ))}</div>
       </div>
     )
   }
}




export default Book
