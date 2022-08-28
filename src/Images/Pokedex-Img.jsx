import React from "react";
import Pokedex from './Pokedex.png';

export const PokedexLogo = (props) => {
    return <img src={Pokedex} alt="Logo" style={{ width: "100%", height: "100%", minWidth: '110px' }}/>
}