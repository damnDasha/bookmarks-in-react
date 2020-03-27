import React,  {Component} from 'react';
import './BookmarkApp.css';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab'

class BookmarkApp extends Component {
    render (){
        return (
            <div className='bookmarkApp'>
                <h1>Bookmarks</h1>
                <BookmarksList bookmarks ={this.props.bookmarks} />
                <Fab showForm={this.props.showForm} />
            </div>
        )
    }
}

export default BookmarkApp;