/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import { GrescaComponent } from './gresca.component';
beforeEach(() => render(<GrescaComponent />));

describe('gresca component', () => {
  it('Must display on screen', () => {
    expect(screen.queryByText(/gresca work fine/i)).toBeInTheDocument();
  });
});
