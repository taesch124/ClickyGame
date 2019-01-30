import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import CharacterCard from './components/CharacterCard/CharacterCard';
import './App.css';
import characters from './characters.json';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
      topScore: 0,
      message: 'Click on a character to start',
      guesses: []
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
         />
        <Header />
        <div className="container">
          <div className="flex-row">
            {characters.map(e => <CharacterCard 
              key={e.id}
              id={e.id}
              image={e.image}
              userGuessed={this.userGuessed}
              />) }
          </div>
        </div>
      </div>
    );
  }

  userGuessed = (id) => {
    console.log(id);
    if(this.state.guesses.includes(id)) {
      console.log('Already guessed');
      this.setState({
        currentScore: 0,
        topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
        message: 'You already picked this character',
        guesses: []
      })
    } else {
      let newGuesses = this.state.guesses;
      newGuesses.push(id);
      this.setState({
          currentScore: this.state.currentScore + 1,
          message: 'You guessed correctly!',
          guesses: newGuesses
        });
    }
  }
}

export default App;
