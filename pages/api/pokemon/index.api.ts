import axios from 'axios';
import { HttpStatus, iPokemonPreview } from 'interfaces';
import { createEndpoints, RouteHandler } from 'modules';

interface iPokemonPost {
  req: {
    limit?: number;
    page: number;
  };
  res: iPokemonPreview[];
}

const buildPokemonResponse = (
  results: { name: string; url: string }[]
): iPokemonPost['res'] =>
  results.map((pokemon) => {
    const decomponsedUrl = pokemon.url.split('/');
    const _id = decomponsedUrl[decomponsedUrl.length - 2];
    return {
      _id,
      name: pokemon.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_id}.png`,
    };
  });

const post: RouteHandler<iPokemonPost['res'], iPokemonPost['req']> = async ({
  body,
}) => {
  console.log('que pasa');
  const { page, limit = 20 } = body;
  console.log(page, limit);
  const resp = await axios
    .get(`${process.env.POKEMON_BASE_URL}/pokemon`, {
      params: {
        offset: page * limit,
        limit,
      },
    })
    .then((res) => buildPokemonResponse(res.data?.results));
  return {
    status: HttpStatus.OK,
    body: resp,
  };
};

export default createEndpoints({ post });
