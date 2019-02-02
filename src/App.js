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
      correctAnswer: false,
      gameOver: false,
      message: 'Click on a character to start',
      characters: characters,
      guesses: []
    }
  }

  componentWillMount() {
    this.shuffle();
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          correctGuess={this.state.correctAnswer}
          gameOver={this.state.gameOver}
          message={this.state.message}
         />
        <Header />
        <div className="container">
          <div className="flex-row">
            {this.state.characters.map(e => <CharacterCard 
              key={e.id}
              id={e.id}
              image={e.image}
              userGuessed={this.userGuessed}
              gameOver={this.state.gameOver}
              resetGame={this.resetGame}
              />) }
          </div>
        </div>
      </div>
    );
  }

  shuffle = () => {
    let shuffle = [];
    let characters = this.state.characters.slice();
    
    while(characters.length > 0) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      shuffle.push(characters.splice(randomIndex, 1)[0]);
    }
    
    this.setState({characters: shuffle});
  }

  userGuessed = (id) => {
    console.log(id);
    if(this.state.guesses.includes(id)) {
      console.log('Already guessed');
      this.setState({
        gameOver: true,
        correctAnswer: false,
        message: 'You already picked this character',
      });
    } else {
      let newGuesses = this.state.guesses;
      newGuesses.push(id);
      this.setState({
          currentScore: this.state.currentScore + 1,
          correctAnswer: true,
          message: 'You guessed correctly!',
          guesses: newGuesses
        });
    }
    this.shuffle();
  }

  resetGame = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
      gameOver: false,
      message: 'Click on a character to start',
      guesses: []
    });
  }

}

export default App;
