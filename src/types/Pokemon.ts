export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: { "official-artwork": { front_default: string } };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: object;
  height: number;
  weight: number;
  moves: object;
  species: {
    name: string;
    url: string;
  };
};
