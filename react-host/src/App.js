import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [
        { 
          name: '10% Happier', 
          description: 'Practicing meditation and mindfulness will make you at least 10 percent happier.' 
        },
        { 
          name: 'The 10X Rule', 
          description: 'The biggest mistake most people make in life is not setting goals high enough.' 
        },
        { 
          name: 'A Short Guide to a Happy Life', 
          description: 'The only thing you have that nobody else has is control of your life.' 
        }
      ],
      selectedBooks: []
    };
  }

  componentDidMount() {
    this.nv.addEventListener("bookSelected", this.handleBookSelected);
  }

  handleBookSelected = (event) => {
    const book = JSON.parse(event.detail);
    let selectedBookList = [];
    if (this.state.selectedBooks.find(x => x.name === book.name)) {
      selectedBookList = this.state.selectedBooks.filter(x => x.name !== book.name);
    } else {
      selectedBookList = [...this.state.selectedBooks, book];
    }
    this.setState({
      ...this.state,
      selectedBooks: [...selectedBookList] 
    });
  }

  renderSelectedBooks() {
    return(
      <div>
        {
          this.state.selectedBooks.map(function(book, index){
            return <div><strong key={ index }>{book.name}</strong></div>;
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="book-list">
          <book-list ref={elem => this.nv = elem} books={JSON.stringify(this.state.books)}></book-list>
        </div>
        <div className="selected-books">
          <h1>Shopping card</h1>
          {this.renderSelectedBooks()}
        </div>
      </div>
    );
  }
}

export default App;
