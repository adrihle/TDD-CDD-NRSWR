import { iActionPokemons } from 'store/actions';
import { filter, mergeMap, Observable, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export const pokemonsEpic = (
  action$: Observable<iActionPokemons<any>>
): Observable<iActionPokemons<any>> =>
  action$.pipe(
    filter((action) => action.type === 'POKEMONS_REQUEST'),
    mergeMap((action: iActionPokemons<any>) => {
      console.log(action);
      return ajax({
        method: 'POST',
        url: `${process.env.SERVER_BASE_URL}/pokemon`,
        body: {
          page: action.page,
        },
      });
    }),
    tap(console.log)
  );
