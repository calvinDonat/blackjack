import React, { Component } from 'react';

class Card extends React.Component {
  render() {
    return (
      <img src={this.props.address} className='card' id={this.props.cardId} />
    );
  }
}

export default Card;
