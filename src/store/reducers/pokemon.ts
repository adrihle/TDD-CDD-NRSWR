import { iPokemonPreview } from 'interfaces';
import { iActionPokemons } from 'store/actions';
import { initialPokemonState, iPokemonsState } from 'store/states';

export const pokemonReducer = (
  state = initialPokemonState,
  action: iActionPokemons<iPokemonPreview[]>
): iPokemonsState => {
  switch (action.type) {
    case 'POKEMONS_REQUEST': {
      return {
        ...state,
        page: action.page,
        loading: true,
      };
    }
    case 'POKEMONS_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        pokemons: action.payload as iPokemonPreview[],
      };
    }
    case 'POKEMONS_FAILED': {
      return {
        ...state,
        loading: false,
        error: 'Error fetching pokemons',
      };
    }
    case 'POKEMONS_RESET': {
      return {
        ...initialPokemonState,
      };
    }
    default:
      return state;
  }
};
