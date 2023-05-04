import React, { useEffect, useState } from "react";

const getPokemonUrl = (id: number) =>
  `https://pokeapi.co/api/v2/pokemon/${id}/`;

// we only care about these two fields
interface PokemonResponse {
  id: number;
  name: string;
}

export default function Fetch() {
  //nisam znao je li potreban ovaj dio da se zna koji su prije pokemoni dosli, ali sam ga napravio svejedno
  //ukoliko to nije bilo potrebno nadam se da necete uzeti za zlo :D
  const [pokemon, setPokemon] = useState<PokemonResponse[]>(() => {
    const localData = localStorage.getItem("pokemons");
    return localData ? JSON.parse(localData) : [];
  });

  const [fetchNumber, setFetchNumber] = useState(() => {
    const fetchNumber = localStorage.getItem("fetchNumber");
    return fetchNumber ? JSON.parse(fetchNumber) : 1;
  });

  useEffect(() => {
    fetchPokemon(1);
    //ovo je na pocetku da bi se pokazalo pri prvom renderu
    //spremi se u listu pokemona
  }, []);

  useEffect(() => {
    fetchPokemon(fetchNumber);
    //ovaj fetch se poziva svaki put kad se promijeni fetchNumber
  }, [fetchNumber]);

  // your task here is to fetch Pokémon from a given URL and just display its name
  // first Pokémon should be fetched when the compontent is first rendered
  // then, once user clicks on FETCH button, increment your id to fetch the next one and add it to the list

  // fetch works just as it worked in plain JavaScript, the only difference is you need to specify what the
  // type of the object is, after converting it to .json()
  // e.g. code snippet
  const fetchPokemon = async (id: number) => {
    //we fetch the Pokemon, convert it to json and we have p object of type PokemonResponse
    const p: PokemonResponse = await (await fetch(getPokemonUrl(id))).json();
    const pokemonBitniDijelovi = { id: id, name: p.name };
    setPokemon([...pokemon, pokemonBitniDijelovi]);
    localStorage.setItem("pokemons", JSON.stringify(pokemon));
    localStorage.setItem("fetchNumber", JSON.stringify(fetchNumber));
  };

  // return 2 elements:
  // 1st: a button which will trigger another fetch on click, for a Pokémon with next id
  // 2nd: All Pokémon stored in your list
  return (
    <div>
      <button onClick={() => setFetchNumber((prev: number) => ++prev)}>
        FETCH
      </button>
      {/* display Pokémon in a list here, just display a div with its name for each Pokémon */}
      <ul className="pokemon-list">
        {pokemon.map((p) => (
          <li key={p.id} className="pokemon-card">
            {`${p.id}. ${p.name}`}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
