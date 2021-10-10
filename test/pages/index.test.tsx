import { filterUsers } from '../../containers/hello/hello'

describe('Testing function sample', () => {
  test('the function should filter a input "name" in "arr" given both', () => {
    const input: any = [
      { id: 1, name: 'Patricia' },
      { id: 2, name: 'Lola' },
      { id: 3, name: 'Julieta' },
    ]

    const output: any = [{ id: 1, name: 'Patricia' }]

    expect(filterUsers(input, 'Patricia')).toEqual(output)
  })
})
