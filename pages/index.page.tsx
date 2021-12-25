import { NextPage, NextPageContext, GetStaticProps } from 'next'
import Link from 'next/link'
import { iSeoPage } from 'interfaces'
import axios from 'axios'

interface iHomePage extends iSeoPage {
  pokemons: string[]
}

const Home: NextPage<iHomePage> = ({ title, pokemons }) => {
  console.log(title)
  return (
    <main>
      <h3>Pokemon List</h3>
      <ul>
        {pokemons?.map((pokemon) => (
          <li style={{ cursor: 'pointer' }} key={pokemon}>
            <Link href={pokemon}>
              <a key={pokemon}>{pokemon.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps<iHomePage> = async ({
  req,
}: NextPageContext) => {
  console.log(req)
  type pokemonType = { name: string; url: string }
  const pokemons = await axios
    .get('https://pokeapi.co/api/v2/pokemon?offset=10&limit=1118')
    .then((res) => res.data)
    .then((res) =>
      (res.results as pokemonType[]).map((pokemon) => pokemon.name)
    )
  return {
    props: {
      title: 'asd',
      description: 'asd',
      url: '',
      pokemons,
    },
  }
}

export default Home
