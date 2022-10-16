export const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

const pokeListNumber = 10;
const pokeOffsetNumber = 0;
export const pokeListTotal = `?limit=${pokeListNumber}`;
export const pokeOffsetTotal = `&offset=${pokeOffsetNumber}`;

export const initialPokemonList = `${pokeApiUrl}${pokeListTotal}`;

export const pokeResponse = await fetch(initialPokemonList);
