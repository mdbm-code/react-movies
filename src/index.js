import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Timer from './components/timer/App';
import Collection from './components/collection/App';
import Loadposts from './components/load-posts/App';
import ControlledForm from './components/forms/controlled/App';
import ControlledFormWithRef from './components/forms/withRef/App';
import ReactMovies from './components/react-movies/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactMovies />);
