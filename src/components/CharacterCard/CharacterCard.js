import React, {Component} from 'react';
import './styles.css';

class CharacterCard extends Component {

    render() {
        return (
            <div 
                className={`card ${this.props.gameOver ? "shake" : ""}`}
                onAnimationEnd={this.props.resetGame}>
                <img 
                    className="character-portrait"
                    alt="Character portrait" 
                    src={this.props.image} 
                    id={this.props.id}
                    onClick={(e) => this.props.gameOver ? null : this.props.userGuessed(e.target.id)}
                    
                    />
            </div>
        )
    }
}

export default CharacterCard;