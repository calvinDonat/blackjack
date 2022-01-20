import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Player from './player';
import Info from './info';
import Dealer from './dealer';
import CurrentBet from './currentBet';
import Betting from './betting';

class Background extends React.Component {
  state = {
    betting: { display: 'block' },
    coverCard: { display: 'none' },
    playerBust: { display: 'none' },
    dealerBust: { display: 'none' },
    money: {
      betMoney: 5,
      totalMoney: 995,
    },
    playerCards: [],
    dealerCards: [],
    playerTotal: 0,
    dealerTotal: 0,
    deckOfCards: [
      {
        name: 'ace of clubs',
        value: 11,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/ace_of_clubs.png'),
        used: false,
      },
      {
        name: 'ace of diamonds',
        value: 11,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/ace_of_diamonds.png'),
        used: false,
      },
      {
        name: 'ace of hearts',
        value: 11,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/ace_of_hearts.png'),
        used: false,
      },
      {
        name: 'ace of spades',
        value: 11,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/ace_of_spades.png'),
        used: false,
      },
      {
        name: '2 of clubs',
        value: 2,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/2_of_clubs.png'),
        used: false,
      },
      {
        name: '2 of diamonds',
        value: 2,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/2_of_diamonds.png'),
        used: false,
      },
      {
        name: '2 of hearts',
        value: 2,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/2_of_hearts.png'),
        used: false,
      },
      {
        name: '2 of spades',
        value: 2,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/2_of_spades.png'),
        used: false,
      },
      {
        name: '3 of clubs',
        value: 3,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/3_of_clubs.png'),
        used: false,
      },
      {
        name: '3 of diamonds',
        value: 3,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/3_of_diamonds.png'),
        used: false,
      },
      {
        name: '3 of hearts',
        value: 3,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/3_of_hearts.png'),
        used: false,
      },
      {
        name: '3 of spades',
        value: 3,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/3_of_spades.png'),
        used: false,
      },
      {
        name: '4 of clubs',
        value: 4,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/4_of_clubs.png'),
        used: false,
      },
      {
        name: '4 of diamonds',
        value: 4,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/4_of_diamonds.png'),
        used: false,
      },
      {
        name: '4 of hearts',
        value: 4,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/4_of_hearts.png'),
        used: false,
      },
      {
        name: '4 of spades',
        value: 4,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/4_of_spades.png'),
        used: false,
      },
      {
        name: '5 of clubs',
        value: 5,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/5_of_clubs.png'),
        used: false,
      },
      {
        name: '5 of diamonds',
        value: 5,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/5_of_diamonds.png'),
        used: false,
      },
      {
        name: '5 of hearts',
        value: 5,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/5_of_hearts.png'),
        used: false,
      },
      {
        name: '5 of spades',
        value: 5,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/5_of_spades.png'),
        used: false,
      },
      {
        name: '6 of clubs',
        value: 6,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/6_of_clubs.png'),
        used: false,
      },
      {
        name: '6 of diamonds',
        value: 6,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/6_of_diamonds.png'),
        used: false,
      },
      {
        name: '6 of hearts',
        value: 6,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/6_of_hearts.png'),
        used: false,
      },
      {
        name: '6 of spades',
        value: 6,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/6_of_spades.png'),
        used: false,
      },
      {
        name: '7 of clubs',
        value: 7,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/7_of_clubs.png'),
        used: false,
      },
      {
        name: '7 of diamonds',
        value: 7,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/7_of_diamonds.png'),
        used: false,
      },
      {
        name: '7 of hearts',
        value: 7,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/7_of_hearts.png'),
        used: false,
      },
      {
        name: '7 of spades',
        value: 7,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/7_of_spades.png'),
        used: false,
      },
      {
        name: '8 of clubs',
        value: 8,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/8_of_clubs.png'),
        used: false,
      },
      {
        name: '8 of diamonds',
        value: 8,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/8_of_diamonds.png'),
        used: false,
      },
      {
        name: '8 of hearts',
        value: 8,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/8_of_hearts.png'),
        used: false,
      },
      {
        name: '8 of spades',
        value: 8,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/8_of_spades.png'),
        used: false,
      },
      {
        name: '9 of clubs',
        value: 9,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/9_of_clubs.png'),
        used: false,
      },
      {
        name: '9 of diamonds',
        value: 9,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/9_of_diamonds.png'),
        used: false,
      },
      {
        name: '9 of hearts',
        value: 9,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/9_of_hearts.png'),
        used: false,
      },
      {
        name: '9 of spades',
        value: 9,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/9_of_spades.png'),
        used: false,
      },
      {
        name: '10 of clubs',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/10_of_clubs.png'),
        used: false,
      },
      {
        name: '10 of diamonds',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/10_of_diamonds.png'),
        used: false,
      },
      {
        name: '10 of hearts',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/10_of_hearts.png'),
        used: false,
      },
      {
        name: '10 of spades',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/10_of_spades.png'),
        used: false,
      },
      {
        name: 'jack of clubs',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/jack_of_clubs.png'),
        used: false,
      },
      {
        name: 'jack of diamonds',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/jack_of_diamonds.png'),
        used: false,
      },
      {
        name: 'jack of hearts',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/jack_of_hearts.png'),
        used: false,
      },
      {
        name: 'jack of spades',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/jack_of_spades.png'),
        used: false,
      },
      {
        name: 'queen of clubs',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/queen_of_clubs.png'),
        used: false,
      },
      {
        name: 'queen of diamonds',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/queen_of_diamonds.png'),
        used: false,
      },
      {
        name: 'queen of hearts',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/queen_of_hearts.png'),
        used: false,
      },
      {
        name: 'queen of spades',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/queen_of_spades.png'),
        used: false,
      },
      {
        name: 'king of clubs',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/king_of_clubs.png'),
        used: false,
      },
      {
        name: 'king of diamonds',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/king_of_diamonds.png'),
        used: false,
      },
      {
        name: 'king of hearts',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/king_of_hearts.png'),
        used: false,
      },
      {
        name: 'king of spades',
        value: 10,
        address: require('C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/king_of_spades.png'),
        used: false,
      },
    ],
  };

  //   createCards = () => {
  //     let deckOfCards = [];
  //     for (let i = 1; i <= 13; i++) {
  //       for (let j = 1; j <= 4; j++) {
  //         let suite = '';
  //         switch (j) {
  //           case 1:
  //             suite = 'clubs';
  //             break;
  //           case 2:
  //             suite = 'diamonds';
  //             break;
  //           case 3:
  //             suite = 'hearts';
  //             break;
  //           case 4:
  //             suite = 'spades';
  //             break;
  //         }
  //         let number = '';
  //         switch (i) {
  //           case 11:
  //             number = 'jack';
  //             break;
  //           case 12:
  //             number = 'queen';
  //             break;
  //           case 13:
  //             number = 'king';
  //             break;
  //           case 1:
  //             number = 'ace';
  //             break;
  //           default:
  //             number = i.toString();
  //         }
  //         let value;
  //         if (i > 10) {
  //           value = 10;
  //         } else if (i == 1) {
  //           value = 11;
  //         } else {
  //           value = i;
  //         }

  //         let pushObject = {
  //           name: `${number} of ${suite}`,
  //           value: value,
  //           address: `require(C:/Users/calvi/React/blackjack-app/src/PNG-cards-1.3/${number}_of_${suite}.png)`,
  //           used: false,
  //         };

  //         deckOfCards.push(pushObject);
  //       }
  //     }
  //     this.setState({ deckOfCards });

  //     console.log({ deckOfCards });
  //   };

  //   handleGetCard = () => {
  //     const availableCards = this.state.deckOfCards.filter((card) => !card.used);
  //     const card =
  //       availableCards[Math.floor(Math.random() * availableCards.length - 1)];
  //     card.used = true;
  //     this.setState({
  //       playerTotal: (this.state.playerTotal += card.value),
  //       deckOfCards: [availableCards],
  //     });
  //     console.log({ card }, { availableCards }, this.state);
  //     return card;
  //   };

  checkPlayerTotal = () => {
    let playerTotal = this.state.playerTotal;
    const playerCards = [...this.state.playerCards];
    if (this.state.playerCards.length == 2 && playerTotal == 21) {
      console.log('Blackjack!');
      // Handle Blackjack
    } else if (playerTotal > 21) {
      console.log('Over 21');
      const aces = playerCards.filter((card) => card.value == 11);
      if (aces.length == 0) {
        console.log('playerBust');
        let playerBust = this.state.playerBust;
        playerBust = { display: 'block' };
        setTimeout(this.setState({ playerBust }), 1000);
        setTimeout(this.handleReset, 3000);
      } else {
        playerCards[playerCards.indexOf(aces[0])].value = 1;
        this.setState({ playerCards });
        playerTotal = 0;
        for (let card of this.state.playerCards) {
          playerTotal += card.value;
        }
        this.setState({ playerTotal });
      }
    } else {
      return;
    }
  };

  handlePlayerHit = () => {
    const deckOfCards = [...this.state.deckOfCards];
    const availableCards = deckOfCards.filter((card) => !card.used);
    const card =
      availableCards[Math.floor(Math.random() * (availableCards.length - 1))];
    deckOfCards[deckOfCards.indexOf(card)].used = true;
    const playerCards = [...this.state.playerCards];
    deckOfCards[deckOfCards.indexOf(card)].playerId = playerCards.length + 1;
    playerCards.push(deckOfCards[deckOfCards.indexOf(card)]);
    let playerTotal = this.state.playerTotal;
    playerTotal += deckOfCards[deckOfCards.indexOf(card)].value;
    this.setState({ playerTotal });
    this.setState({ deckOfCards });
    this.setState({ playerCards });
    this.setState({ playerTotal });
    setTimeout(this.checkPlayerTotal, 0);
  };

  handleDealerHit = () => {
    const deckOfCards = [...this.state.deckOfCards];
    const availableCards = deckOfCards.filter((card) => !card.used);
    const card =
      availableCards[Math.floor(Math.random() * (availableCards.length - 1))];
    deckOfCards[deckOfCards.indexOf(card)].used = true;
    const dealerCards = [...this.state.dealerCards];
    deckOfCards[deckOfCards.indexOf(card)].dealerId = dealerCards.length + 1;
    dealerCards.push(deckOfCards[deckOfCards.indexOf(card)]);
    let dealerTotal = this.state.dealerTotal;
    dealerTotal += deckOfCards[deckOfCards.indexOf(card)].value;
    this.setState({ dealerTotal });
    this.setState({ deckOfCards });
    this.setState({ dealerCards });
    this.setState({ dealerTotal });
  };

  handleBet = (amount) => {
    console.log(amount);
    const money = this.state.money;
    if ((money.totalMoney -= amount) > -1) {
      money.betMoney += amount;
    } else {
      money.totalMoney += amount;
      alert('Cannot bet more than you have, silly!');
    }

    this.setState({ money });
  };

  handleBetReset = () => {
    console.log('reset');
    const money = this.state.money;
    money.totalMoney = money.totalMoney += money.betMoney - 5;
    money.betMoney = 5;
    this.setState({ money });
  };

  handleAllIn = () => {
    console.log('All In');
    const money = this.state.money;
    money.betMoney = money.betMoney += money.totalMoney;
    money.totalMoney = 0;
    this.setState({ money });
  };

  handleDone = () => {
    console.log('done');
    let betting = this.state.betting;
    betting = { display: 'none' };
    this.setState({ betting });
    let coverCard = this.state.coverCard;
    coverCard = { display: 'block ' };
    this.setState({ coverCard });
    setTimeout(this.handlePlayerHit, 500);
    setTimeout(this.handlePlayerHit, 500);
    setTimeout(this.handleDealerHit, 1000);
  };

  checkDealerTotal = () => {
    let dealerTotal = this.state.dealerTotal;
    const dealerCards = [...this.state.dealerCards];
    if (dealerTotal < 21) {
      if (dealerTotal < 17) {
        setTimeout(this.handleDealerHit, 500);
        setTimeout(this.checkDealerTotal, 1000);
      } else if (dealerTotal >= 17) {
        const aces = dealerCards.filter((card) => card.value == 11);
        if (aces.length == 0) {
          console.log('Checking Winner');
          setTimeout(this.checkWinner, 1000);
        } else {
          dealerCards[dealerCards.indexOf(aces[0])].value = 1;
          this.setState({ dealerCards });
          dealerTotal = 0;
          for (let card of this.state.dealerCards) {
            dealerTotal += card.value;
          }
          this.setState({ dealerTotal });
          setTimeout(this.checkDealerTotal, 1000);
        }
      }
    } else if (dealerTotal == 21) {
      console.log('Checking Winner');
      setTimeout(this.checkWinner, 1000);
    } else {
      console.log('Dealer Bust');
      let dealerBust = this.state.dealerBust;
      dealerBust = { display: 'block' };
      setTimeout(this.setState({ dealerBust }), 1000);
      const money = this.state.money;
      money.totalMoney += this.state.money.betMoney * 2;
      setTimeout(this.setState({ money }), 1000);
      setTimeout(this.handleReset, 3000);
    }
  };

  checkWinner = () => {
    const money = this.state.money;
    if (this.state.dealerTotal > this.state.playerTotal) {
      money.totalMoney -= this.state.money.betMoney;
      this.setState({ money });
      setTimeout(this.handleReset, 3000);
    } else if ((this.state.dealerTotal = this.state.playerTotal)) {
      setTimeout(this.handleReset, 3000);
    } else {
      money.totalMoney += this.state.money.betMoney * 2;
      this.setState({ money });
      setTimeout(this.handleReset, 3000);
    }
  };

  handleStay = () => {
    let coverCard = this.state.coverCard;
    coverCard = { display: 'none' };
    setTimeout(this.setState({ coverCard }), 2000);
    setTimeout(this.handleDealerHit, 500);
    setTimeout(this.checkDealerTotal, 1000);
  };

  handleReset = () => {
    let betting = this.state.betting;
    let coverCard = this.state.coverCard;
    let playerBust = this.state.playerBust;
    let dealerBust = this.state.dealerBust;
    let money = this.state.money;
    let playerCards = this.state.playerCards;
    let dealerCards = this.state.dealerCards;
    let playerTotal = this.state.playerTotal;
    let dealerTotal = this.state.dealerTotal;
    playerCards = [];
    dealerCards = [];
    playerTotal = 0;
    dealerTotal = 0;
    betting = { display: 'block' };
    coverCard = { display: 'none' };
    playerBust = { display: 'none' };
    dealerBust = { display: 'none' };
    money = {
      betMoney: 5,
      totalMoney: this.state.money.totalMoney - 5,
    };
    this.setState({
      betting,
      coverCard,
      playerBust,
      dealerBust,
      money,
      playerCards,
      dealerCards,
      playerTotal,
      dealerTotal,
    });
  };

  render() {
    return (
      <div className='background'>
        <div className='dealerSection'>
          <Info />
          <Dealer
            dealerCards={this.state.dealerCards}
            coverCard={this.state.coverCard}
            isBust={this.state.dealerBust}
            dealerTotal={this.state.dealerTotal}
          />
        </div>
        <div className='bettingSection'>
          <CurrentBet currentBet={this.state.money.betMoney} />
        </div>
        <div className='playerSection'>
          <Player
            onHit={this.handlePlayerHit}
            onStay={this.handleStay}
            playerCards={this.state.playerCards}
            playerTotal={this.state.playerTotal}
            isTime={this.state.coverCard}
            isBust={this.state.playerBust}
            money={this.state.money.totalMoney}
          />
          <Betting
            totalMoney={this.state.money.totalMoney}
            betMoney={this.state.money.betMoney}
            onBet={this.handleBet}
            onReset={this.handleBetReset}
            onAllIn={this.handleAllIn}
            onDone={this.handleDone}
            display={this.state.betting}
          />
        </div>
      </div>
    );
  }
}

export default Background;
