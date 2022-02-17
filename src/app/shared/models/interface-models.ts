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
  height?: number;
  weight?: number;
  hp?:number
}
