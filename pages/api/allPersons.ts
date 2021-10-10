import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => res.status(200).send(data))
}

export default handler
