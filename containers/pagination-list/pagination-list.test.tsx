/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';

describe('Pagination List', () => {
  it('must display a title', () => {
    render(<div>Pagination List</div>);
    expect(screen.queryByText(/Pagination List/i)).toBeInTheDocument();
  });
});
