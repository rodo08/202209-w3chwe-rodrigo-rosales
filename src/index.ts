import { pokeApiUrl } from "./pokeApi-linkup/URLs.js";
import Aside from "./components/Aside/Aside.js";

const root: HTMLElement = document.querySelector(".root");

const aside = new Aside(root, "card__aside");
aside.render();
