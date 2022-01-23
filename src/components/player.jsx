import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Card from './card';

class Player extends React.Component {
  render() {
    return (
      <div className='player' style={this.props.isTime}>
        <div className='playerButtons' style={this.props.playerButtons}>
          <button onClick={this.props.onHit} id='hit'>
            HIT
          </button>
          <button onClick={this.props.onStay} id='stay'>
            STAY
          </button>
          <div id='playerTotal'>{this.props.playerTotal}</div>
        </div>
        <div className='playerCards'>
          <div id='playerBust' style={this.props.isBust}>
            BUST!
          </div>
          {this.props.playerCards.map((card) => (
            <Card
              key={card.playerId}
              address={card.address}
              cardId={`player${card.playerId}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Player;
