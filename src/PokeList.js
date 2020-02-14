import React, { Component } from 'react';
import PokeItem from './PokeItem';

class PokeList extends Component {

    render() {
        const { pokemon } = this.props;
        const pokeList = pokemon.map(item => {
            return <PokeItem pokemon={item} />
        })
        return (
            <ul className = 'poke-wrap'>
                {pokeList}
            </ul>
        )
    }
}
           
export default PokeList;