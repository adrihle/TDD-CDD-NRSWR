import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

interface iPokemon {
  name: string;
  sprites: Record<string, string>;
}

const Pokemon: NextPage<iPokemon> = ({ name, sprites }) => {
  return (
    <main>
      <section>
        <Link href="/">Volver</Link>
        <p>Pokemon: {name}</p>
      </section>
      <div>
        {Object.values(sprites).map(
          (sprite) =>
            typeof sprite === 'string' && (
              <img src={sprite} alt={sprite} key={sprite} />
            )
        )}
      </div>
    </main>
  );
};

export default Pokemon;

export const getStaticProps: GetStaticProps<iPokemon> = async ({
  params: { pokemon },
}) => {
  const pokemonFound = await axios
    .get(`http://localhost:3000/api/pokemon/${pokemon}`)
    .then((res) => res.data?.pokemon);
  return {
    props: {
      name: pokemonFound?.name,
      sprites: pokemonFound?.sprites,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  type pokemonType = { name: string; url: string };
  const paths = await axios
    .get('https://pokeapi.co/api/v2/pokemon?offset=10&limit=1118')
    .then((res) => res.data)
    .then((res) =>
      (res.results as pokemonType[]).map((pokemon) => ({
        params: { pokemon: pokemon.name },
      }))
    );
  return { paths, fallback: false };
};
