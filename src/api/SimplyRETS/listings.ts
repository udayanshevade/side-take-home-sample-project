import ApiBase from '../ApiBase';
import simplyRetsInstance from './base';
import * as apiTypes from './types';

/**
 * SimplyRETS API endpoints:
 * https://docs.simplyrets.com/api/index.html#/
 * - exporting for tests
 */
export const endpoints = {
  properties: {
    get: {
      many: 'properties',
      one: (id: number) => `property/${id}`,
    },
  },
};

export const getProperties = async (): Promise<
  apiTypes.ApiResListing[] | null
> => ApiBase.get(endpoints.properties.get.many, simplyRetsInstance);

export const getProperty = async (
  mlsId: number
): Promise<apiTypes.ApiResListing | null> =>
  ApiBase.get(endpoints.properties.get.one(mlsId), simplyRetsInstance);
