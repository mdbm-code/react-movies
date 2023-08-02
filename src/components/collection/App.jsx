import React, { Component } from 'react';
import Posts from './Posts';

class Collection extends Component {
  state = {
    posts: [
      { id: 'abs1', name: 'JS Basic' },
      { id: 'abs2', name: 'JS Advanced' },
      { id: 'abs3', name: 'React JS' },
      { id: 'abs4', name: 'Redux' },
      { id: 'abs5', name: 'React Pro' },
    ],
  };

  deletePost = (id) => {
    const newArr = this.state.posts.filter((post) => post.id !== id);
    this.setState({ posts: newArr });
  };

  render() {
    return (
      <div style={{ margin: '0 auto', width: '90%' }}>
        <Posts posts={this.state.posts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default Collection;
