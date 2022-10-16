export interface PokemonNameUrl {
  name: string;
  url: string;
}

export interface Pokemon {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonList {
  results: PokemonNameUrl[];
}
