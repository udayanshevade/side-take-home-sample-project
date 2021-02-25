import React from 'react';
import { render, screen } from '@testing-library/react';
import Listing from '.';

const mockDate = '2021-02-25T02:07:14.559Z';

test('Listing should render without issue', () => {
  const mockListingData = {
    address: { full: 'Foo, BAR, BAZ' },
    listDate: mockDate,
    listPrice: 1,
    mlsId: 1,
    photos: ['foo'],
    property: {
      area: 9001,
      bathsFull: 2,
      bathsHalf: 3,
      bedrooms: 5,
    },
  };

  render(<Listing {...mockListingData} />);
  expect(screen.getByRole('article')).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(/5 BR/)).toBeInTheDocument();
  expect(screen.getByText(/3.5 Bath/)).toBeInTheDocument();
  expect(screen.getByText(/9001 Sq Ft/)).toBeInTheDocument();
});
