import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import SearchOptions from "./SearchOptions.js";
import Paging from "./Paging.js";
import { getPokeData } from './PokeApi';

export default class App extends Component {
  state = { pokeSearch: [] };

  async loadPokemon() {
    const response = await getPokeData();
    console.log(response)
    const pokeSearch = response.search;
    const totalResults = response.totalResults;
    this.setState({
      pokeSearch: pokeSearch,
      totalResults: totalResults,
     });
  }

  async componentDidMount() {
    await this.loadPokemon();

    window.addEventListener("hashchange", async () => {
      console.log("change");
      await this.loadPokemon();
    });
  }

  render() {
    const { pokeSearch, totalResults } = this.state;
    return (  
      <div className="App">
        <Header />
        <main>
        <section>
          <SearchOptions />
        </section>
        <section>
          <PokeList pokemon={pokeSearch} /> 
          <Paging totalResults={totalResults} />
        </section>
        </main>
      </div>
    );
  }
}




