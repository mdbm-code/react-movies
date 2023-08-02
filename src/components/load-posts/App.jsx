import React, { Component } from 'react';

class Loadposts extends Component {
  state = {
    count: 0,
    posts: [],
    loading: true,
    comments: [],
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    //console.log('Mounted');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => this.setState({ posts: data, loading: false }));

    this.timerId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((data) => data.json())
        .then((data) => this.setState({ comments: data }));
    }, 3000);
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    //console.log('render');
    return (
      <div className='App' style={{ margin: 'auto', width: '300px' }}>
        <button onClick={this.decrement}>-</button>
        <span style={countStyle}>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <h3>{this.state.posts.length} posts was loaded</h3>
        )}
      </div>
    );
  }
}

export default Loadposts;

const countStyle = { margin: '0 0.75rem', display: 'inline-block' };
