import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  EmptyObject,
  Store,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { pokemonsEpic } from './epics';
import { pokemonReducer } from './reducers/pokemon';
import { Provider } from 'react-redux';
import { initialPokemonState, iPokemonsState } from './states';

export const rootEpic = combineEpics(pokemonsEpic);

const reducers = combineReducers({
  pokemons: pokemonReducer,
});

interface iState {
  pokemons: iPokemonsState;
}

const initialState: iState = {
  pokemons: initialPokemonState,
};

type iStore = Store<
  EmptyObject & {
    pokemons: iPokemonsState;
  },
  AnyAction
> & {
  dispatch: unknown;
};

export const createAppStore = (initialState: iState): iStore => {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export const ReduxProvider: React.FC = ({ children }) => {
  return (
    <Provider store={createAppStore(initialState)}>
      {Array.isArray(children) ? children.map((child) => child) : children}
    </Provider>
  );
};
