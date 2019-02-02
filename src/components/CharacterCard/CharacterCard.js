import React, {Component} from 'react';
import './styles.css';

class CharacterCard extends Component {

    render() {
        return (
            <div className={`card ${this.props.gameOver ? "shake" : ""}`}>
                <img 
                    className="character-portrait"
                    alt="Character portrait" 
                    src={this.props.image} 
                    id={this.props.id}
                    onClick={(e) =>  this.props.userGuessed(e.target.id)}
                    />
            </div>
        )
    }
}

export default CharacterCard;