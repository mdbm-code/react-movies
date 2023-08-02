import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    firstName: '',
    email: '',
    message: '',
    sub: false,
    select: '',
    gender: 'male',
  };

  onChange = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Your first name camn't be less 5 symbols");
    }
  };

  validateEmail = () => {
    const ff = this.state.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (ff === null) {
      alert('Check email');
    }
  };

  render() {
    const { firstName, email, message, sub, select, gender } = this.state;
    return (
      <div style={{ margin: '0 auto', width: '90%' }}>
        <input
          type='text'
          name='firstName'
          placeholder='First name'
          value={firstName}
          onChange={this.onChange}
          onBlur={this.validateName}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={this.onChange}
          onBlur={this.validateEmail}
        />
        <br />
        <textarea
          name='message'
          placeholder='Enter your message'
          value={message}
          onChange={this.onChange}
        />
        <br />
        <label htmlFor='checkbox1'>
          Подписка
          <input
            type='checkbox'
            name='sub'
            checked={sub}
            onChange={this.onChange}
          />
        </label>
        <br />
        <select name='select' value={select} onChange={this.onChange}>
          <option value='' disabled></option>
          <option value='1'>Вариант 1</option>
          <option value='2'>Вариант 2</option>
          <option value='3'>Вариант 3</option>
        </select>
        <br />
        <input
          type='radio'
          name='gender'
          value='male'
          onChange={this.onChange}
          checked={gender === 'male'}
        />
        Male
        <input
          type='radio'
          name='gender'
          value='female'
          onChange={this.onChange}
          checked={gender === 'female'}
        />
        Female
      </div>
    );
  }
}
