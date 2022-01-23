import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';

class CurrentBet extends React.Component {
  render() {
    return (
      <div className='currentBet'>
        <div id='currentBetOnTable'>{this.props.currentBet}</div>
      </div>
    );
  }
}

export default CurrentBet;
