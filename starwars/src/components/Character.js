// Write your Character component here
import React from "react";
import styledComponent from 'styled-components';

const Pokemon = styledComponent.div`
    width: 100%;
    max-width: 400px;
    background: whitesmoke;
    border-radius: 5px;
    margin-bottom: 2vh;
    display: flex;
    align-items: center;
`;

const Name = styledComponent.h3`
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-size: 1.4rem;
`;

const Sprite = styledComponent.img`
    background: url("https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=ef6934c65140cd8b&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2Ff%2Ff2%2FAmie_Grass_Wallpaper.png");
    background-position: center center;
    background-size: cover;
    height: 100%;
    margin-right: 10px;
    flex: .8
`;

const Info = styledComponent.div`
    flex: 1.5;
`

export default function Character({pokemon}){
    if(pokemon){
        return (
            <Pokemon>
                <Sprite src={pokemon.sprites.front_default}/>
                <Info>
                    <Name>{pokemon.name}</Name>
                    <p><strong>Types:</strong> {pokemon.types.map(type=> type.type.name + " ")}</p>
                    <p><strong>Abilities:</strong> {pokemon.abilities.map(ability=> ability.ability.name + " ")}</p>
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                </Info>
            </Pokemon>
        )
    }
    return null;
}