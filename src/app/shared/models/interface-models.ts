export interface IPokemon {
  id: number;
  name: string;
  officialArt: string;
  weight: number;
  height: number;
}

export interface IPokemonResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string;
      }
    }
  };
  height: number;
  weight: number;
}
