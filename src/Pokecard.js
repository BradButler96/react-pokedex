import React from 'react'
import './Pokecard.css';

const Pokecard = ({ id, name, type, base_exp }) => {
    return (
        <div className='Pokecard' >
            <div className='Pokecard-name' >{ name }</div>
            <img className='Pokecard-img' src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png` } alt={ name } />      
            <div className='Pokecard-info' >Type: { type }</div>
            <div className='Pokecard-info'>EXP: { base_exp }</div> 
        </div>
    )
}

export default Pokecard;