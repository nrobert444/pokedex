import React, { Component } from 'react';

export default class SearchOptions extends Component {
    state = {
      searchInput: ""
    };
  
    handleForm = event => {
        if(!this.state.searchInput){
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const queryParam = new URLSearchParams();
        queryParam.set('pokemon', this.state.searchInput);
        window.location.hash = queryParam.toString();
    }
  
    render() {
      return (
        <div id="search">
            <form onSubmit={this.handleForm}>
            <input
            onChange={e => this.setState({ searchInput: e.target.value })}
            value={this.state.searchInput}
            />
            <button>Search 🔍</button>
             </form>
        </div>
    );
  }
}