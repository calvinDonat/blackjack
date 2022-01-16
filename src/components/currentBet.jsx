import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';

class CurrentBet extends React.Component {
  render() {
    return (
      <div className='currentBet'>
        <div id='currentBetOnTable'>${this.props.currentBet}</div>
        <img
          src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/100_pokerChipNoShadow.png')}
          id='currentBet100'
        />
        <img
          src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/500_pokerChipNoShadow.png')}
          id='currentBet500'
        />
        <img
          src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/1000_pokerChipNoShadow.png')}
          id='currentBet1000'
        />
      </div>
    );
  }
}

export default CurrentBet;
