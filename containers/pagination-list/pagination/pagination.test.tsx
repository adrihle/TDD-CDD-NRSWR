/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import { PaginationComponent } from './pagination.component';
beforeEach(() => render(<PaginationComponent />));

describe('pagination component', () => {
  it('Must display on screen', () => {
    expect(screen.queryByText(/pagination work fine/i)).toBeInTheDocument();
  });
});
