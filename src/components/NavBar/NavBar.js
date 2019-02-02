import React from 'react';
import './styles.css';

function NavBar(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue-grey lighten-2">
          <h1 className="brand-logo left">Clicky Game</h1>
          <span className={`user-guess center ${ props.correctGuess ? 'right-guess' : props.gameOver ? 'wrong-guess' : ''}`}>{props.message}</span>
          <ul className="right score-container">
            <li className="score-text">Score: {props.currentScore}</li>
            <li className="score-text"><span>|</span></li>
            <li className="score-text">Top Score: {props.topScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;