import { NextPage, GetStaticProps } from 'next';
import { iPokemonPreview } from 'interfaces';
import { PaginationListContainer } from 'containers';
import axios from 'axios';

interface iHomePage {
  pokemons: iPokemonPreview[];
}

const Home: NextPage<iHomePage> = ({ pokemons }) => {
  return (
    <main>
      <h3>Pokemon List</h3>
      <PaginationListContainer pokemons={pokemons} />
    </main>
  );
};

export const getStaticProps: GetStaticProps<iHomePage> = async () => {
  const resp = await axios
    .post<iPokemonPreview[]>(`${process.env.SERVER_BASE_URL}/pokemon`, {
      limit: 20,
      page: 0,
    })
    .then((res) => res.data);
  return {
    props: {
      pokemons: resp,
    },
  };
};

export default Home;
