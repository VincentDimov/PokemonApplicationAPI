import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function getData() {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        let json = await response.json();
        setPokemonList(json.results);
    }
    getData();
  }, []);

  const getPokemon = async () => {
      let response = await fetch(selectedPokemon);
      let json = await response.json();
      setPokemonData(json);
  };

  return (
    <div>
      <select className="dropdown" onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value="">Välj en Pokemon</option>
        {pokemonList.map((p) => (
          <option key={p.name} value={p.url}>
            {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
          </option>
        ))}
      </select>

      <button className="get-btn" onClick={getPokemon}>
        Get Info
      </button>

      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
}

export default PokemonApplication