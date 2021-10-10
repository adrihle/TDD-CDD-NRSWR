import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => res.status(200).send(filter(data, req.body.name)))
}

export default handler

const filter = (data, nameMatch) => {
  return data.filter((person) => {
    return person.name.match(nameMatch)
  })
}
