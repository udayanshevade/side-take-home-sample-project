import React from 'react';
import { render, screen } from '@testing-library/react';
import Listings from '.';
import testData from '../../api/SimplyRets/__tests__/test.json';
import useLoadListingsData from '../../hooks/useLoadListingsData';
import useSavedListings from '../../hooks/useSavedListings';

jest.mock('../../api/SimplyRets/listings');

jest.mock('react-lazyload', () => ({ children }) => children);

const MockContainer = () => {
  const [saved, persistListings] = useSavedListings();
  const [{ status, data }] = useLoadListingsData();
  return (
    <Listings
      saved={saved}
      persistListings={persistListings}
      status={status}
      data={data}
    />
  );
};

test('Listings should render without error', async () => {
  render(<MockContainer />);
  const listings = await screen.findAllByRole('article');
  expect(listings.length).toBe(testData.length);
});

test('Listings should render the cached data', async () => {
  localStorage.setItem('listingsData', JSON.stringify(testData.slice(0, 1)));
  render(<MockContainer />);
  const listings = await screen.findAllByRole('article');
  expect(listings.length).toBe(1);
});
