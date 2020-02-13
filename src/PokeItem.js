import React, { Component } from 'react';
                
export default class PokeItem extends Component {
    render() {
        return (<li>
            <div>
                <h2>Name: {this.props.pokemon.pokemon}</h2> 
                <p>HP: {this.props.pokemon.hp}</p>
                <p>Attack Power: {this.props.pokemon.attack}</p>
                <p>Defense: {this.props.pokemon.defense}</p>
            </div>
            <div>
                <img
                    src={this.props.pokemon.url_image}
                    alt={this.props.pokemon.url_image} />
            </div>
        </li>
        );
    }
}