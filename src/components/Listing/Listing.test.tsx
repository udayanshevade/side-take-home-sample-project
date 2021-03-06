import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Listing from '.';

jest.mock('react-lazyload', () => ({ children }) => children);

const mockDate = '2021-02-25T02:07:14.559Z';

test('Listing should render without issue', () => {
  const saved = {};
  const persistListings = jest.fn();
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

  render(
    <Listing
      {...mockListingData}
      saved={saved}
      persistListings={persistListings}
    />
  );
  const article = screen.getByRole('article');
  expect(article).toBeInTheDocument();
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  const bedrooms = screen.getByText(/5 BR/);
  expect(bedrooms).toBeInTheDocument();
  const bathrooms = screen.getByText(/3.5 Bath/);
  expect(bathrooms).toBeInTheDocument();
  const area = screen.getByText(/9001 Sq Ft/);
  expect(area).toBeInTheDocument();
});

test('Saved UI should render differently', () => {
  const saved = { 1: true };
  const persistListings = jest.fn();
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
  render(
    <Listing
      {...mockListingData}
      saved={saved}
      persistListings={persistListings}
    />
  );
  const savedIcon = screen.getByTestId('save-icon--filled');
  expect(savedIcon).toBeInTheDocument();
});
