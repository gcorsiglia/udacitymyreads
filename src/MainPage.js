import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class MainPage extends Component {
	
	render() {
		
		const { books } = this.props;

		return(
			<div className="list-books">
        <div className="list-books-title">
        	<h1>MyReads</h1>
      	</div>
            
      	<div className="list-books-content">
        	<div>
        		<Shelf
        			shelfID="current"
        			shelfArray={
        				books.filter((book) => 
        					book.shelf === 'currentlyReading'
        				)
        			}
        			moveShelf={this.props.moveShelf}
        		/>
        		
        		<Shelf 
        			shelfID="want"
							shelfArray={
        				books.filter((book) => 
        					book.shelf === 'wantToRead'
        				)
        			}
        			moveShelf={this.props.moveShelf}
        		/>
        		
        		<Shelf 
        			shelfID="read"
							shelfArray={
        				books.filter((book) => 
        					book.shelf === 'read'
        				)
        			}
        			moveShelf={this.props.moveShelf}
        		/>
        	</div>
      	</div>
            
      	<div className="open-search">
        	<Link 
        		to="/Search">
        			Add a book
        	</Link>
      	</div>
    	</div>
		);
	}
}

export default MainPage;