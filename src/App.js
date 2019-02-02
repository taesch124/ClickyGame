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
        currentScore: 0,
        gameOver: true,
        topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
        message: 'You already picked this character',
        guesses: []
      })
      setTimeout(() => {
        this.setState({gameOver: false});
      }, 500);
    } else {
      let newGuesses = this.state.guesses;
      newGuesses.push(id);
      this.setState({
          currentScore: this.state.currentScore + 1,
          message: 'You guessed correctly!',
          guesses: newGuesses
        });
    }
    this.shuffle();
  }

}

export default App;
