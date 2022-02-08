/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import axios from 'axios';
import { ListComponent } from './list.component';

beforeEach(async () => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
      page: 0,
    })
    .then((res) => {
      console.log(res.data);
    });
  return render(<ListComponent />);
});

describe('list component', () => {
  it('Must display on screen', () => {
    expect(screen.queryByText(/list work fine/i)).toBeInTheDocument();
  });
});
