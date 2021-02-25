import React from 'react';
import { render, screen } from '@testing-library/react';
import Listings from '.';
import testData from '../../api/SimplyRets/__tests__/test.json';

jest.mock('../../api/SimplyRets/listings');

test('Listings should render without error', async () => {
  render(<Listings />);
  const listings = await screen.findAllByRole('article');
  expect(listings.length).toBe(testData.length);
});

test('Listings should render the cached data', async () => {
  localStorage.setItem('listingsData', JSON.stringify(testData.slice(0, 1)));
  render(<Listings />);
  const listings = await screen.findAllByRole('article');
  expect(listings.length).toBe(1);
});
