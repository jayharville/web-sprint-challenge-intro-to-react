import React, {useState, useEffect} from 'react';
import axios from "axios";
import styledComponent from "styled-components";
import './App.css';

import Character from "./components/Character";

const API = "https://pokeapi.co/api/v2/pokemon/";


const Logo = styledComponent.img`
  margin: 0 auto;
  margin-top: 2vh;
  margin-bottom: 5vh;
  text-align: center;
  display: block;
`

const Characters = styledComponent.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [pokemon, setPokemon] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios.get(API).then(({data})=>{
      data.results.forEach(item=>{
        axios.get(item.url).then(({data})=>{
          setPokemon(pokemon=> [...pokemon, data])
        }).catch(err=>{
          console.log(err);
        });
      })
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      {/* <h1 className="Header">Characters</h1> */}
      <Logo src="https://fontmeme.com/permalink/200627/c8aa47397d7dc4f428f594d375a4b09b.png" alt="pokemon-font" border="0"/>
      <Characters>
        {pokemon[0] && pokemon.map((pokemon, i)=>{
          return <Character key={i} pokemon={pokemon}/>
        })}
      </Characters>
    </div>
  );
}

export default App;
