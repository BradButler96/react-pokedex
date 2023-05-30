import React from 'react'
import './Game.css';
import Pokedex from './Pokedex.js';

const PokeList = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
]

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}

const Game = () => {
    const shuffled = shuffle(PokeList)

    const hand1 = shuffled.filter((a, i) => i % 2 === 0)
    const hand2 = shuffled.filter((a, i) => hand1.indexOf(a) === -1)

    const exp1 = hand1.map((p) => p.base_experience).reduce((a,b) => a+b, 0)
    const exp2 = hand2.map((p) => p.base_experience).reduce((a,b) => a+b, 0)

    console.log(exp1 > exp2)

    return (
      <div className="Game">
        <Pokedex pokemon={hand1} exp={exp1} winner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} winner={exp2 > exp1} />
      </div>
    )
}

export default Game;
