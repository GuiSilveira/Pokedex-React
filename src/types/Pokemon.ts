export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: { "official-artwork": { front_default: string } };
  };
  types: object;
  stats: object;
  height: number;
  weight: number;
  moves: object;
};
