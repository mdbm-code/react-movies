import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleOnChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault(0);
    this.props.setSearchString(this.state.search, this.state.type);
  };

  handleSelectType = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        this.props.setSearchString(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { type } = this.state;
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.handleOnSubmit}>
          <div className='input-field col s12'>
            <input
              placeholder='Поиск'
              onChange={this.handleOnChange}
              value={this.state.search}
              type='text'
            />
            <button className='btn search-btn' onClick={this.handleOnSubmit}>
              Поиск
            </button>
          </div>
          <div className='radios'>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='all'
                checked={type === 'all'}
                onChange={this.handleSelectType}
              />
              <span>Все</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='movie'
                checked={type === 'movie'}
                onChange={this.handleSelectType}
              />
              <span>Фильмы</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='series'
                checked={type === 'series'}
                onChange={this.handleSelectType}
              />
              <span>Сериалы</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
