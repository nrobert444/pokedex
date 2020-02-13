import React, { Component } from 'react';
import PokeItem from './PokeItem';

class PokeList extends Component {

    render() {
        const pokeData = this.props.pokemon;
        const pokeList = pokeData.map((item , index) => {
            return <PokeItem pokemon={item} key={index}/>
        })
        return (
            <ul className = 'poke-wrap'>
                {pokeList}
            </ul>
        )
    }
}
           
export default PokeList;