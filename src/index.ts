// Import { pokeApiUrl } from "./pokeApi-linkup/URLs.js";
import Aside from "./components/Aside/Aside.js";
import type { Pokemon } from "./pokeApi-linkup/PokemonInterface.js";
import { pokeResponse } from "./pokeApi-linkup/urls.js";

const root: HTMLElement = document.querySelector(".root");

const aside = new Aside(root, "card__aside");
aside.render();

// Const response = await fetch(initialPokemonList);

// Export const responseObj = await response.json();

const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
const pokemon = (await response.json()) as Pokemon;
const path = pokemon.sprites.other["official-artwork"].front_default;
