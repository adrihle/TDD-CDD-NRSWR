import { ListComponent } from './list';
import { PaginationComponent } from './pagination';
import { iPokemonPreview } from 'interfaces';
import { useCallback, useRef, useState } from 'react';
import axios from 'axios';

interface iProps {
  pokemons: iPokemonPreview[];
}

let loading = false;
export const PaginationListContainer: React.FC<iProps> = ({ pokemons }) => {
  const [pokemonList, setPokemonList] = useState<iPokemonPreview[]>(pokemons);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const isLoading = useRef<boolean>(false);
  // const [page, setPage] = useState<number>(0);
  const pageCount = useRef<number>(0);

  console.log('render container');

  // const updatePokemons = async (up?: boolean) => {
  //     setPage(prev => up ? prev + 1 : prev - 1);
  //     setIsLoading(true);
  //     await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
  //         page: page
  //     }).then(res => setPokemonList(res.data));
  //     setIsLoading(false);
  // };

  // useEffect(() => {
  //     const updatePokemons = async () => {
  //         setIsLoading(true);
  //         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
  //             page: page
  //         }).then(res => setPokemonList(res.data));
  //         setIsLoading(false);
  //     };
  //     updatePokemons();
  // }, [page]);

  const handlePagination = useCallback(async (page) => {
    pageCount.current = page;
    // isLoading.current = true;
    // console.log(isLoading.current);
    loading = true;
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
        page: pageCount.current,
      })
      .then((res) => {
        setPokemonList(res.data);
      });
    loading = false;
    // console.log(isLoading.current);
  }, []);

  return (
    <>
      {loading}
      <PaginationComponent
        page={pageCount.current}
        handlePagination={handlePagination}
      />
      {loading ? 'Loading ...' : <ListComponent pokemons={pokemonList} />}
    </>
  );
};
