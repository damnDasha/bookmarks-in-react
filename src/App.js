import React, { Component } from 'react';
import './App.css';

import AddBookmark from './AddBookmark/Addbookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';

class App extends Component {


  
constructor(props) {
  super(props);
  this.state = {
    bookmarks: [],
    showAddForm: false
  };
}

componentDidMount() {
  const url = 'http://localhost:8081/v3/bookmarks';
  const options = {
    method: 'GET',
    headers: {
      "Authorization": "Bearer $2a$10$pZjWnhmcZ3yejpqyyimrDeZJhQznHMPYANlXD.40DDDx69/VV88t2",
      "Content-Type": "application/json"
    }
  };

  fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        bookmarks: data,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });

}

setShowAddForm(show) {
this.setState({
  showAddForm: show
});
}

render() {
  const page = this.state.showAddForm
        ? <AddBookmark ShowForm = {show => this.setShowAddForm(show)}/>
        : <BookmarkApp bookmarks={this.state.bookmarks} ShowForm={show => this.setShowAddForm(show)}/>; 

  return (
    <div className="App">
      { page }
    </div>
  );
}

}





export default App;
