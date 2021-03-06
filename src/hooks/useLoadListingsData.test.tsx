import { render, waitFor } from '@testing-library/react';
import useLoadListingsData from './useLoadListingsData';
import testData from '../api/SimplyRets/__tests__/test.json';

jest.mock('../api/SimplyRets/listings');

const mockFn = jest.fn();

const MockComponent = () => {
  const [{ status, data }] = useLoadListingsData();
  mockFn(status, data);
  return <span />;
};

describe('Custom hook to get listings data on page load', () => {
  beforeEach(() => {
    localStorage.removeItem('listingsData');
    mockFn.mockReset();
  });

  it('should fetch from the cache first if exists', async () => {
    const mockData = testData.slice(0, 1);
    localStorage.setItem('listingsData', JSON.stringify(mockData));
    render(<MockComponent />);
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledWith('fetched', mockData);
    });
  });

  it('should fetch from the api otherwise', async () => {
    render(<MockComponent />);
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledWith('fetched', testData);
    });
  });
});
