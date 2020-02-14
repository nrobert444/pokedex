import React, { Component } from 'react';

export default class SearchOptions extends Component {
    
    componentDidMount() {
      this.updateControls();
  
      window.addEventListener("hashchange", () => {
        this.updateControls();
      });
    }
  
    state = {
      searchInput: ""
    };
  
    updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
  
      this.setState({
        searchInput: searchParams.get("s") || "",
      });
    }
  
    handleSubmit = event => {
      const form = document.querySelector("form");
      event.preventDefault();
      const formData = new FormData(form);
  
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
  
      searchParams.set("s", formData.get("search"));
      //reset to page 1 as this is new search and
      //we don't know how many pages
      searchParams.set("page", 1);
  
      window.location.hash = searchParams.toString();
    };
  
    render() {
      return (
        <form className="options" onSubmit={this.handleSubmit}>
          <label for="search">Search:</label>
          <p>
            <input
              id="search"
              name="search"
              onChange={e => this.setState({ searchInput: e.target.value })}
              value={this.state.searchInput}
            />
          </p>
          <p>
          <button>Search 🔍</button>
        </p>
      </form>
    );
  }
}