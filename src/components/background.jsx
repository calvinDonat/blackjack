import React, { Component } from 'react';
import 'C:/Users/calvi/React/blackjack-app/src/App.css';
import Player from './player';
import Info from './info';
import Dealer from './dealer';
import CurrentBet from './currentBet';
import Betting from './betting';
import CA from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/AC.svg';
import DA from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/AD.svg';
import HA from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/AH.svg';
import SA from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/AS.svg';
import C2 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/2C.svg';
import D2 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/2D.svg';
import H2 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/2H.svg';
import S2 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/2S.svg';
import C3 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/3C.svg';
import D3 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/3D.svg';
import H3 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/3H.svg';
import S3 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/3S.svg';
import C4 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/4C.svg';
import D4 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/4D.svg';
import H4 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/4H.svg';
import S4 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/4S.svg';
import C5 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/5C.svg';
import D5 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/5D.svg';
import H5 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/5H.svg';
import S5 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/5S.svg';
import C6 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/6C.svg';
import D6 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/6D.svg';
import H6 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/6H.svg';
import S6 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/6S.svg';
import C7 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/7C.svg';
import D7 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/7D.svg';
import H7 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/7H.svg';
import S7 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/7S.svg';
import C8 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/8C.svg';
import D8 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/8D.svg';
import H8 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/8H.svg';
import S8 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/8S.svg';
import C9 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/9C.svg';
import D9 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/9D.svg';
import H9 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/9H.svg';
import S9 from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/9S.svg';
import CT from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/TC.svg';
import DT from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/TD.svg';
import HT from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/TH.svg';
import ST from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/TS.svg';
import CJ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/JC.svg';
import DJ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/JD.svg';
import HJ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/JH.svg';
import SJ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/JS.svg';
import CQ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/QC.svg';
import DQ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/QD.svg';
import HQ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/QH.svg';
import SQ from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/QS.svg';
import CK from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/KC.svg';
import DK from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/KD.svg';
import HK from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/KH.svg';
import SK from 'C:/Users/calvi/React/blackjack-app/src/poker-symmetric/KS.svg';

class Background extends React.Component {
  state = {
    betting: { display: 'block' },
    coverCard: { display: 'none' },
    playingTime: { display: 'none' },
    playerBust: { display: 'none' },
    dealerBust: { display: 'none' },
    playerLose: { display: 'flex' },
    playerButtons: { display: 'flex' },
    money: {
      betMoney: '$5',
      totalMoney: 1000,
    },
    playerCards: [],
    dealerCards: [],
    playerTotal: 0,
    dealerTotal: 0,
    deckOfCards: [
      {
        name: 'A of C',
        value: 11,
        address: CA,
        used: false,
      },
      {
        name: 'A of D',
        value: 11,
        address: DA,
        used: false,
      },
      {
        name: 'A of H',
        value: 11,
        address: HA,
        used: false,
      },
      {
        name: 'A of S',
        value: 11,
        address: SA,
        used: false,
      },
      {
        name: '2 of C',
        value: 2,
        address: C2,
        used: false,
      },
      {
        name: '2 of D',
        value: 2,
        address: D2,
        used: false,
      },
      {
        name: '2 of H',
        value: 2,
        address: H2,
        used: false,
      },
      {
        name: '2 of S',
        value: 2,
        address: S2,
        used: false,
      },
      {
        name: '3 of C',
        value: 3,
        address: C3,
        used: false,
      },
      {
        name: '3 of D',
        value: 3,
        address: D3,
        used: false,
      },
      {
        name: '3 of H',
        value: 3,
        address: H3,
        used: false,
      },
      {
        name: '3 of S',
        value: 3,
        address: S3,
        used: false,
      },
      {
        name: '4 of C',
        value: 4,
        address: C4,
        used: false,
      },
      {
        name: '4 of D',
        value: 4,
        address: D4,
        used: false,
      },
      {
        name: '4 of H',
        value: 4,
        address: H4,
        used: false,
      },
      {
        name: '4 of S',
        value: 4,
        address: S4,
        used: false,
      },
      {
        name: '5 of C',
        value: 5,
        address: C5,
        used: false,
      },
      {
        name: '5 of D',
        value: 5,
        address: D5,
        used: false,
      },
      {
        name: '5 of H',
        value: 5,
        address: H5,
        used: false,
      },
      {
        name: '5 of S',
        value: 5,
        address: S5,
        used: false,
      },
      {
        name: '6 of C',
        value: 6,
        address: C6,
        used: false,
      },
      {
        name: '6 of D',
        value: 6,
        address: D6,
        used: false,
      },
      {
        name: '6 of H',
        value: 6,
        address: H6,
        used: false,
      },
      {
        name: '6 of S',
        value: 6,
        address: S6,
        used: false,
      },
      {
        name: '7 of C',
        value: 7,
        address: C7,
        used: false,
      },
      {
        name: '7 of D',
        value: 7,
        address: D7,
        used: false,
      },
      {
        name: '7 of H',
        value: 7,
        address: H7,
        used: false,
      },
      {
        name: '7 of S',
        value: 7,
        address: S7,
        used: false,
      },
      {
        name: '8 of C',
        value: 8,
        address: C8,
        used: false,
      },
      {
        name: '8 of D',
        value: 8,
        address: D8,
        used: false,
      },
      {
        name: '8 of H',
        value: 8,
        address: H8,
        used: false,
      },
      {
        name: '8 of S',
        value: 8,
        address: S8,
        used: false,
      },
      {
        name: '9 of C',
        value: 9,
        address: C9,
        used: false,
      },
      {
        name: '9 of D',
        value: 9,
        address: D9,
        used: false,
      },
      {
        name: '9 of H',
        value: 9,
        address: H9,
        used: false,
      },
      {
        name: '9 of S',
        value: 9,
        address: S9,
        used: false,
      },
      {
        name: 'T of C',
        value: 10,
        address: CT,
        used: false,
      },
      {
        name: 'T of D',
        value: 10,
        address: DT,
        used: false,
      },
      {
        name: 'T of H',
        value: 10,
        address: HT,
        used: false,
      },
      {
        name: 'T of S',
        value: 10,
        address: ST,
        used: false,
      },
      {
        name: 'J of C',
        value: 10,
        address: CJ,
        used: false,
      },
      {
        name: 'J of D',
        value: 10,
        address: DJ,
        used: false,
      },
      {
        name: 'J of H',
        value: 10,
        address: HJ,
        used: false,
      },
      {
        name: 'J of S',
        value: 10,
        address: SJ,
        used: false,
      },
      {
        name: 'Q of C',
        value: 10,
        address: CQ,
        used: false,
      },
      {
        name: 'Q of D',
        value: 10,
        address: DQ,
        used: false,
      },
      {
        name: 'Q of H',
        value: 10,
        address: HQ,
        used: false,
      },
      {
        name: 'Q of S',
        value: 10,
        address: SQ,
        used: false,
      },
      {
        name: 'K of C',
        value: 10,
        address: CK,
        used: false,
      },
      {
        name: 'K of D',
        value: 10,
        address: DK,
        used: false,
      },
      {
        name: 'K of H',
        value: 10,
        address: HK,
        used: false,
      },
      {
        name: 'K of S',
        value: 10,
        address: SK,
        used: false,
      },
    ],
  };

  // createCards = () => {
  //   let deckOfCards = [];
  //   for (let i = 1; i <= 13; i++) {
  //     for (let j = 1; j <= 4; j++) {
  //       let suite = '';
  //       switch (j) {
  //         case 1:
  //           suite = 'C';
  //           break;
  //         case 2:
  //           suite = 'D';
  //           break;
  //         case 3:
  //           suite = 'H';
  //           break;
  //         case 4:
  //           suite = 'S';
  //           break;
  //       }
  //       let number = '';
  //       switch (i) {
  //         case 10:
  //           number = 'T';
  //           break;
  //         case 11:
  //           number = 'J';
  //           break;
  //         case 12:
  //           number = 'Q';
  //           break;
  //         case 13:
  //           number = 'K';
  //           break;
  //         case 1:
  //           number = 'A';
  //           break;
  //         default:
  //           number = i.toString();
  //       }
  //       let value;
  //       if (i > 10) {
  //         value = 10;
  //       } else if (i == 1) {
  //         value = 11;
  //       } else {
  //         value = i;
  //       }

  //       let pushObject = {
  //         name: `${number} of ${suite}`,
  //         value: value,
  //         address: `${suite}${number}`,
  //         used: false,
  //       };

  //       deckOfCards.push(pushObject);
  //     }
  //   }

  //   console.log({ deckOfCards });
  // };

  checkMoney = () => {
    if (this.state.money.totalMoney == 0) {
      const money = this.state.money;
      money.betMoney = 'You have run out of money and lost';
      let playerLose = this.state.playerLose;
      playerLose = { display: 'none' };
      this.setState({ money, playerLose });
    } else {
      setTimeout(this.handleReset, 0);
    }
  };

  checkPlayerTotal = () => {
    let playerTotal = this.state.playerTotal;
    const playerCards = [...this.state.playerCards];
    const money = this.state.money;
    const betMoney = this.state.money.betMoney;
    const aces = playerCards.filter((card) => card.value == 11);
    if (playerTotal > 21) {
      if (aces.length == 0) {
        console.log('playerBust');
        let playerBust = this.state.playerBust;
        playerBust = { display: 'block' };
        let playerButtons = this.state.playerButtons;
        playerButtons = { display: 'none' };
        money.totalMoney -= parseInt(this.state.money.betMoney.slice(1));
        money.betMoney = `BUST -${betMoney}`;
        this.setState({ money, playerBust, playerButtons });
        setTimeout(this.checkMoney, 3000);
      } else {
        playerCards[playerCards.indexOf(aces[0])].value = 1;
        this.setState({ playerCards });
        playerTotal = 0;
        for (let card of this.state.playerCards) {
          playerTotal += card.value;
        }
        this.setState({ playerTotal });
      }
    } else if (this.state.playerCards.length == 2 && playerTotal == 21) {
      money.totalMoney += Math.floor(parseInt(money.betMoney.slice(1)) * 1.5);
      money.betMoney = `BLACKJACK +${Math.floor(
        parseInt(betMoney.slice(1)) * 1.5
      )}`;
      this.setState({ money });
      setTimeout(this.handleReset, 3000);
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

  handleDealerHit = (once = false) => {
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
    this.setState({ dealerTotal, deckOfCards, dealerCards, dealerTotal });
    if (!once) {
      setTimeout(this.checkDealerTotal, 500);
    }
  };

  handleBet = (amount) => {
    console.log(`bet ${amount}`);
    const money = this.state.money;
    if (parseInt(money.betMoney.slice(1)) + amount <= money.totalMoney) {
      money.betMoney = '$' + (parseInt(money.betMoney.slice(1)) + amount);
    } else {
      alert('Cannot bet more than you have, silly!');
    }

    console.log({ money });
    this.setState({ money });
  };

  handleBetReset = () => {
    console.log('bet reset');
    const money = this.state.money;
    money.betMoney = '$5';
    this.setState({ money });
  };

  handleAllIn = () => {
    console.log('All In');
    const money = this.state.money;
    money.betMoney = `$${money.totalMoney}`;
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
    let playingTime = this.state.playingTime;
    playingTime = { display: 'flex ' };
    this.setState({ playingTime });
    setTimeout(this.handlePlayerHit, 500);
    setTimeout(this.handlePlayerHit, 500);
    setTimeout(this.handleDealerHit(true), 1000);
  };

  checkDealerTotal = () => {
    let dealerTotal = this.state.dealerTotal;
    const dealerCards = [...this.state.dealerCards];
    const money = this.state.money;
    const betMoney = this.state.money.betMoney;
    const aces = dealerCards.filter((card) => card.value == 11);
    if (dealerTotal > 21) {
      if (aces.length == 0) {
        console.log('dealerBust');
        let dealerBust = this.state.dealerBust;
        dealerBust = { display: 'block' };
        money.totalMoney -= parseInt(this.state.money.betMoney.slice(1));
        money.betMoney = `DEALER BUST +${betMoney}`;
        this.setState({ money });
        this.setState({ dealerBust });
      } else {
        dealerCards[dealerCards.indexOf(aces[0])].value = 1;
        this.setState({ dealerCards });
        dealerTotal = 0;
        for (let card of this.state.dealerCards) {
          dealerTotal += card.value;
        }
        this.setState({ dealerTotal });
      }
    } else if (dealerTotal >= 17) {
      setTimeout(this.checkWinner, 0);
    } else {
      setTimeout(this.handleDealerHit, 500);
    }
  };

  checkWinner = () => {
    const money = this.state.money;
    const betMoney = this.state.money.betMoney;
    if (this.state.dealerTotal > this.state.playerTotal) {
      console.log('Lose');
      money.totalMoney -= parseInt(this.state.money.betMoney.slice(1));
      money.betMoney = `LOSE -${betMoney}`;
      this.setState({ money });
      setTimeout(this.checkMoney, 3000);
    } else if (this.state.dealerTotal == this.state.playerTotal) {
      money.betMoney = 'TIE';
      this.setState({ money });
      setTimeout(this.handleReset, 3000);
    } else if (this.state.dealerTotal < this.state.playerTotal) {
      money.totalMoney += parseInt(this.state.money.betMoney.slice(1));
      money.betMoney = `WIN +${betMoney}`;
      this.setState({ money });
      setTimeout(this.handleReset, 3000);
    }
  };

  handleStay = () => {
    let coverCard = this.state.coverCard;
    coverCard = { display: 'none' };
    setTimeout(this.setState({ coverCard }), 2000);
    setTimeout(this.handleDealerHit, 500);
  };

  handleReset = () => {
    let deckOfCards = this.state.deckOfCards;
    let betting = this.state.betting;
    let coverCard = this.state.coverCard;
    let playerBust = this.state.playerBust;
    let dealerBust = this.state.dealerBust;
    let money = this.state.money;
    let playerCards = this.state.playerCards;
    let dealerCards = this.state.dealerCards;
    let playerTotal = this.state.playerTotal;
    let dealerTotal = this.state.dealerTotal;
    let playingTime = this.state.playingTime;
    let playerButtons = this.state.playerButtons;
    if (deckOfCards.filter((card) => card.used == false).length < 13) {
      console.log('reshuffling');
      for (let card of deckOfCards) {
        card.used = false;
      }
      this.setState({ deckOfCards });
      money.betMoney = 'Reshuffling';
      this.setState({ money });
      setTimeout(() => {
        money = {
          betMoney: '$5',
          totalMoney: this.state.money.totalMoney,
        };
        this.setState({ money });
      }, 2000);
    } else {
      money = {
        betMoney: '$5',
        totalMoney: this.state.money.totalMoney,
      };
      this.setState({ money });
    }
    playerCards = [];
    dealerCards = [];
    playerButtons = { display: 'flex' };
    playerTotal = 0;
    dealerTotal = 0;
    betting = { display: 'block' };
    coverCard = { display: 'none' };
    playerBust = { display: 'none' };
    dealerBust = { display: 'none' };
    playingTime = { display: 'none' };
    this.setState({
      betting,
      coverCard,
      playerBust,
      dealerBust,
      playerCards,
      dealerCards,
      playerTotal,
      dealerTotal,
      playingTime,
      playerButtons,
    });
  };

  render() {
    return (
      <div className='background' style={this.state.youLose}>
        <div className='dealerSection' style={this.state.playerLose}>
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
        <div className='playerSection' style={this.state.playerLose}>
          <Player
            onHit={this.handlePlayerHit}
            onStay={this.handleStay}
            playerCards={this.state.playerCards}
            playerTotal={this.state.playerTotal}
            isTime={this.state.playingTime}
            isBust={this.state.playerBust}
            money={this.state.money.totalMoney}
            playerButtons={this.state.playerButtons}
          />
          <Betting
            betMoney={this.state.money.betMoney}
            onBet={this.handleBet}
            onReset={this.handleBetReset}
            onAllIn={this.handleAllIn}
            onDone={this.handleDone}
            display={this.state.betting}
          />
          <div id='displayMoney'>
            Total Money{' '}
            <span style={{ fontSize: 50 + 'px' }}>
              ${this.state.money.totalMoney}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
