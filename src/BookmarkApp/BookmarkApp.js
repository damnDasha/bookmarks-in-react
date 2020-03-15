import React,  {Component} from 'react';
import './BookmarkApp.css';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab'

class BookmarkApp extends Component {
    render (){
        return (
            <div className='bookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarksList bookmarks ={this.props.bookmarks} />
                <Fab />
            </div>
        )
    }
}

export default BookmarkApp;