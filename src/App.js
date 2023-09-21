import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit(event) {
    const { search } = this.state;
    const query = encodeURIComponent(search);

    window.open(`http://es.forvo.com/word/${query}/#es`);
    window.open(`http://fr.wiktionary.org/wiki/${query}`);
    window.open(`https://www.wordreference.com/es/en/translation.asp?spen=${query}`);

    this.setState({ search: '' });

    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <form className="search-form my-5 p-5" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <label htmlFor="search">
                Enter a Spanish word
              </label>
              <input type="text" className="form-control" name="search" id="search" autoFocus value={ this.state.search } onChange={ this.handleChange }/>
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
