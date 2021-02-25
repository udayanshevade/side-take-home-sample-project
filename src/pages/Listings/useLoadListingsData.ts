import { useEffect, useReducer } from 'react';
import * as listingsApi from '../../api/SimplyRets/listings';
import * as apiTypes from '../../api/SimplyRets/types';

const SET_STATUS = 'SET_STATUS';
const SET_DATA = 'SET_DATA';
const SET_ERROR = 'SET_ERROR';

interface Reducer {
  status: string;
  data: apiTypes.ApiResListing[] | null;
}

const initialState = { status: 'fetching', data: null };

/**
 * Using a reducer to deal with multiple side-effects,
 * updating both status and data at once
 * to avoid any potential race conditions with setting multiple states in parallel.
 */
const reducer = (
  state: Reducer = initialState,
  action: { type: string; payload?: any } // specifying 'any' payload, but would want to type more explicitly
): Reducer => {
  switch (action.type) {
    case SET_STATUS: {
      return { ...state, status: action.payload };
    }
    case SET_DATA: {
      return { ...state, status: 'fetched', data: action.payload };
    }
    case SET_ERROR: {
      return { ...state, status: 'error', data: null };
    }
    default: {
      return state;
    }
  }
};

/**
 * Custom hook to load listings data:
 * - first from the cache if it exists
 * - next from the api
 * - Ideally, we would want to have the freshest data available on every load of the app.
 * - We would request the data from the API in the background as the cached data is seen up front for a better user experience.
 */
const useLoadListingsData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_STATUS, payload: 'fetching' });

    const getNewData = async () => {
      const data = await listingsApi.getProperties();
      if (!data) {
        dispatch({ type: SET_ERROR });
      } else {
        dispatch({ type: SET_DATA, payload: data });
        window.localStorage.setItem('listingsData', JSON.stringify(data));
      }
    };

    const cacheData = window.localStorage.getItem('listingsData');
    if (cacheData) {
      const data = JSON.parse(cacheData || '');
      dispatch({ type: SET_DATA, payload: data });
    } else {
      getNewData();
    }
  }, []);

  return [data];
};

export default useLoadListingsData;
