import './App.css';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  // on button submit, run fetchPokemon which grabs the object and sets it in state.
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.json")
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setPokemon(response.results)
      })
  }



  return (
    <div className='App'>
      <button onClick={fetchPokemon}>Catch em all!</button>
      <hr />
      {
        pokemon.map((pokemon, i) => {
          return (
            <li>{pokemon.name}</li>
          )
        })
      }
    </div>
  );
}

export default App;
