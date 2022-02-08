import axios from 'axios';
import { HttpStatus } from 'interfaces';
import { createEndpoints, RouteHandler } from 'modules';

interface iPokemonGetRequestResponse {
  pokemon: string;
}

const get: RouteHandler<
  iPokemonGetRequestResponse,
  iPokemonGetRequestResponse
> = async ({ query }) => {
  const { pokemon } = query;
  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.data);

  return {
    status: HttpStatus.OK,
    body: {
      pokemon: response,
    },
  };
};

export default createEndpoints({ get });
