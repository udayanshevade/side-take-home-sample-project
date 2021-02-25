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
      }
    };

    const cacheData = window.localStorage.getItem('listingsData');

    if (cacheData) {
      const data = JSON.parse(cacheData);
      dispatch({ type: SET_DATA, payload: data });
    } else {
      getNewData();
    }
  }, []);

  return [data];
};

export default useLoadListingsData;
