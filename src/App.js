import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

export default class App extends Component {
  state = { pokeData: [] };

  async componentDidMount() {
    const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');

    this.setState({ pokeData: pokeData.body.results })
  };

  render() {
    return (
      <div className="App">
        <Header /> 
        <section className="background">
          <PokeList pokemon={this.state.pokeData} />  
        </section>
      </div>
    );
  }
}


