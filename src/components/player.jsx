import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Card from './card';

class Player extends React.Component {
  render() {
    return (
      <div className='player'>
        <button onClick={this.props.onHit} id='hit' style={this.props.isTime}>
          HIT
        </button>
        <button onClick={this.props.onStay} id='stay' style={this.props.isTime}>
          STAY
        </button>
        {this.props.playerCards.map((card) => (
          <Card
            key={card.playerId}
            address={card.address}
            cardId={`player${card.playerId}`}
          />
        ))}
        <div id='playerTotal'>{this.props.playerTotal}</div>
        <div id='playerBust' style={this.props.isBust}>
          BUST!
        </div>
        <div id='displayMoney'>
          Total Money{' '}
          <span style={{ fontSize: 50 + 'px' }}>${this.props.money}</span>
        </div>
      </div>
    );
  }
}

export default Player;
