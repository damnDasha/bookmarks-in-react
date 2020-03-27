import React, {Component} from 'react';
import './Fab.css';

class Fab extends Component {
    render (){
        return(
            <div className='fab' onClick = {e => this.props.showForm(true)} >
                ADD NEW;
            </div>
        )
    }
}

export default Fab;