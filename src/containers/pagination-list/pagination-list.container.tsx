import { ListComponent } from './list';
import { PaginationComponent } from './pagination';
import { iPokemonPreview } from 'interfaces';
import { useCallback, useState } from 'react';
import axios from 'axios';

interface iProps {
  pokemons?: iPokemonPreview[];
}

export const PaginationListContainer: React.FC<iProps> = ({ pokemons }) => {
  const [pokemonList, setPokemonList] = useState<iPokemonPreview[]>(pokemons);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePagination = useCallback(async (page) => {
    setIsLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
        page: page,
      })
      .then((res) => {
        setPokemonList(res.data);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <PaginationComponent handlePagination={handlePagination} />
      {isLoading ? 'Loading ...' : <ListComponent pokemons={pokemonList} />}
    </>
  );
};
