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

    window.open(`http://translate.google.com/translate?hl=en&sl=fr&tl=en&u=http%3A%2F%2Fwww.google.fr%2Fsearch%3Fq%3D${query}%26num%3D10%26hl%3Dfr%26site%3Dimghp%26tbm%3Disch%26sout%3D1%26biw%3D1242%26bih%3D640`);
    window.open(`http://fr.forvo.com/word/${query}/#fr`);
    window.open(`http://www.linguee.com/english-french/search?source=french&query=${query}`);
    window.open(`http://translate.google.com/translate?sl=fr&tl=en&prev=_t&hl=en&ie=UTF-8&eotf=1&u=http://fr.wiktionary.org/wiki/${query}&act=url`);

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
                Rechercher un mot français
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
