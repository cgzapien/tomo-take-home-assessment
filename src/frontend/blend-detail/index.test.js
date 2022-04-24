import { render, screen } from '@testing-library/react';
import BlendDetail from '.';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}));

jest.mock('axios');

test('renders blend detail page', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ status: 200, data: [] })
  );

  await act(async () => {
    render(<BlendDetail />);
  });
  const detailElement = screen.getByText(/Blend Detail Page/i);
  expect(detailElement).toBeInTheDocument();
});
