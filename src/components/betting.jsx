import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';

class Betting extends React.Component {
  render() {
    return (
      <div className='betting' style={this.props.display}>
        <button id='reset' onClick={this.props.onReset}>
          RESET
        </button>
        <button id='allIn' onClick={this.props.onAllIn}>
          ALL IN
        </button>
        <button id='done' onClick={this.props.onDone}>
          DONE
        </button>
        <div id='betMoney'>${this.props.betMoney}</div>
        <button onClick={this.props.onBet.bind(this, 1)} id='pokerChip1'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/1_pokerChip.png')}
            className='pokerChip'
          />
        </button>
        <button onClick={this.props.onBet.bind(this, 5)} id='pokerChip5'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/5_pokerChip.png')}
            className='pokerChip'
          />
        </button>
        <button onClick={this.props.onBet.bind(this, 25)} id='pokerChip25'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/25_pokerChip.png')}
            className='pokerChip'
          />
        </button>
        <button onClick={this.props.onBet.bind(this, 100)} id='pokerChip100'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/100_pokerChip.png')}
            className='pokerChip'
          />
        </button>
        <button onClick={this.props.onBet.bind(this, 500)} id='pokerChip500'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/500_pokerChip.png')}
            className='pokerChip'
          />
        </button>
        <button onClick={this.props.onBet.bind(this, 1000)} id='pokerChip1000'>
          <img
            src={require('C:/Users/calvi/React/blackjack-app/src/PNG-pokerChips/1000_pokerChip.png')}
            className='pokerChip'
          />
        </button>
      </div>
    );
  }
}

export default Betting;
