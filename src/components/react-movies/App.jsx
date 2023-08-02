import React, { Component } from 'react';
import Header from './layout/Header';
import './App.css';
import Footer from './layout/Footer';
import Main from './layout/Main';

const ReactMovies = () => {
  const API_KEY = '2d3e8ade';
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default ReactMovies;
