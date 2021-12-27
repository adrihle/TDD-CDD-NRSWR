/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import { PaginationListContainer } from './pagination-list.container';

beforeEach(() => render(<PaginationListContainer />));

describe('Pagination List Container', () => {
  it('must display a title', () => {
    expect(screen.queryByText(/Pagination List/i)).toBeInTheDocument();
  });
});
