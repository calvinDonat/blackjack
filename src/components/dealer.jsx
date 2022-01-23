import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Deck from 'C:/Users/calvi/React/blackjack-app/src/deck.svg';
import Card from './card';
import backOfCard from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/BackOfCard.svg';

class Dealer extends React.Component {
  render() {
    return (
      <div className='dealer'>
        <div className='dealerCards'>
          {this.props.dealerCards.map((card) => (
            <Card
              key={card.dealerId}
              address={card.address}
              cardId={`dealer${card.dealerId}`}
            />
          ))}
          <img
            src={backOfCard}
            className='coverCard'
            id='dealer2'
            style={this.props.coverCard}
          />
          <div id='dealerBust' style={this.props.isBust}>
            BUST!
          </div>
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
