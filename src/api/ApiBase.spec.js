import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import ApiBase from './ApiBase';

const mock = new AxiosMockAdapter(axios);

describe('Api', () => {
  describe('[GET]', () => {
    it('should return expected value', async () => {
      const mockData = [];
      mock.onGet('/').replyOnce(200, mockData);
      const { data } = await ApiBase.get('/');
      expect(data).toEqual(mockData);
    });

    it('should handle an error properly and return null', async () => {
      mock.onGet('/').networkErrorOnce();
      const res = await ApiBase.get('/');
      expect(res).toBe(null);
    });
  });
});
