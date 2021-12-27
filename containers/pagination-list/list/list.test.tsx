/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import { ListComponent } from './list.component';
beforeEach(() => render(<ListComponent />));

describe('list component', () => {
  it('Must display on screen', () => {
    expect(screen.queryByText(/list work fine/i)).toBeInTheDocument();
  });
});
