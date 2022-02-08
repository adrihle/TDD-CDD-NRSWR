import { iPokemonPreview } from 'interfaces';

export interface iPokemonsState {
  loading: boolean;
  error?: string;
  page: number;
  pokemons: iPokemonPreview[];
}

export const initialPokemonState: iPokemonsState = {
  loading: false,
  error: null,
  page: 0,
  pokemons: [],
};
