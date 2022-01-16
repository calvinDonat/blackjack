import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';

class Info extends React.Component {
  render() {
    return (
      <div className='info'>
        <ul>
          <p className='listHeader'>How to play Blackjack</p>
          <ul>
            <li>
              The goal of the game is to get as close to 21 as you can without
              going over
            </li>
            <li>The total of your cards is your total</li>
            <li>
              Face cards are worth 10, number cards are worth their number, and
              aces are worth 11 or 1
            </li>
            <li>Hitting will cause you to get a card to add to your total</li>
            <li>Staying will end your turn</li>
            <li>You bet before every hand</li>
            <li>
              You are playing against the dealer. If his total is higherthan
              yours, you lose. If you go over 21, you lose. If the dealer busts
              or your total is higher than theirs, you win
            </li>
            <li>Anti bet is $5</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Info;
