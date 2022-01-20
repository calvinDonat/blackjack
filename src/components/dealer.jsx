import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Deck from 'C:/Users/calvi/React/blackjack-app/src/deck.svg';
import Card from './card';

class Dealer extends React.Component {
  render() {
    return (
      <div className='dealer'>
        {this.props.dealerCards.map((card) => (
          <Card
            key={card.dealerId}
            address={card.address}
            cardId={`dealer${card.dealerId}`}
          />
        ))}
        <img
          src={require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/back_of_card.png')}
          id='coverCard'
          style={this.props.coverCard}
        />
        <div id='dealerBust' style={this.props.isBust}>
          BUST!
        </div>
        <div className='dealerTotalDeck'>
          <img src={Deck} className='deck' />
          <div id='dealerTotal'>{this.props.dealerTotal}</div>
        </div>
      </div>
    );
  }
}

export default Dealer;
