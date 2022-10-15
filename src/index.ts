import listLimit from "./url.js";
import Aside from "./components/Aside/Aside.js";

// Import pokemonListLimit from "./url";

const response = await fetch(listLimit);

const responseObject = response.json();

const root: HTMLElement = document.querySelector(".root");

const aside = new Aside(root, "card__aside");
aside.render();
