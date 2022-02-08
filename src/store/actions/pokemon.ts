import { pokemons } from '../types';
import { iPokemonPreview } from 'interfaces';

export interface iActionPokemons<T> {
  type: pokemons;
  page?: number;
  payload?: T | string;
}

export const loadPokemons = (page: number): iActionPokemons<void> => {
  console.log(page);
  return {
    type: 'POKEMONS_REQUEST',
    page,
  };
};

export const resetPokemons = (): iActionPokemons<void> => ({
  type: 'POKEMONS_RESET',
});

export const successPokemons = (
  pokemons: iPokemonPreview[]
): iActionPokemons<iPokemonPreview[]> => ({
  type: 'POKEMONS_SUCCESS',
  payload: pokemons,
});

export const failedPokemons = (error: string): iActionPokemons<string> => ({
  type: 'POKEMONS_FAILED',
  payload: error,
});
