import React, { Component, createRef } from 'react';

export default class FormWithRef extends Component {
  constructor() {
    super();
    this.cardRef = createRef();
    this.emailRef = createRef();
    this.state = {
      card: '',
      email: '',
    };
  }

  componentDidMount() {
    this.cardRef.current.focus();
  }

  onChange = (event) => {
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        if (this.state.card.length >= 16) {
          this.emailRef.current.focus();
        }
      }
    );
  };

  render() {
    const { card, email } = this.state;
    return (
      <div style={{ margin: '0 auto', width: '90%' }}>
        <input
          type='text'
          name='card'
          placeholder='Card number'
          value={card}
          onChange={this.onChange}
          ref={this.cardRef}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={this.onChange}
          ref={this.emailRef}
        />
      </div>
    );
  }
}
