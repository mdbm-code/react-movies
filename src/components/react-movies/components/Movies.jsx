import React, { Component } from 'react';
import Preloader from './Preloader';
import { Movie } from './Movie';
import Search from './Search';

const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;
const KP_TOKEN = process.env.REACT_APP_KP_TOKEN;

export default class Movies extends Component {
  state = {
    bd: [],
    isLoading: true,
    searchString: '',
    source: 'omdb',
  };

  kinopoisk = () => {
    this.setState({
      isLoading: true,
    });
    fetch(
      `https://api.kinopoisk.dev/v1.3/movie?limit=9&selectFields=name+poster+id+type+year+shortDescription+rating.kp`,
      {
        headers: {
          'X-API-KEY': 'EH81WED-FGS4NAQ-HFWX7A5-JCW4CTN',
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          bd: json.docs,
          isLoading: false,
        });
      })
      .catch((err) => console.error(err));
  };

  omdb = (type = 'all') => {
    this.setState({
      isLoading: true,
    });

    const url = `https://www.omdbapi.com/?apikey=2d3e8ade&s=${
      this.state.searchString ? this.state.searchString : 'matrix'
    }${type !== 'all' ? `&type=${type}` : ''}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          bd: json.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    if (this.state.source === 'omdb') {
      this.omdb();
    } else {
      this.kinopoisk();
    }
  }

  setSearchString = (searchString, type) => {
    this.setState(
      () => ({ searchString: searchString }),
      () => {
        if (this.state.source === 'omdb') {
          this.omdb(type);
        } else {
          this.kinopoisk(type);
        }
      }
    );
  };

  render() {
    const { bd, isLoading, source } = this.state;

    return (
      <>
        <Search setSearchString={this.setSearchString} />
        <div className='row'>
          {isLoading ? (
            <Preloader />
          ) : (
            <div className='movies'>
              {bd &&
                bd.map((item) => (
                  <Movie
                    source={source}
                    key={source === 'omdb' ? item.imdbID : item.id}
                    {...item}
                  />
                ))}
            </div>
          )}
        </div>
      </>
    );
  }
}
