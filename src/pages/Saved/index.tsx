import React from 'react';
import Listings from '../../components/Listings';
import useSavedListings from '../../components/Save/useSavedListings';
import useLoadListingsData from '../Listings/useLoadListingsData';

const SavedListingsPage = () => {
  const [saved] = useSavedListings();
  const [{ status, data }] = useLoadListingsData();

  // TODO: refactor/cleanup here for reuse
  if (status === 'fetching') {
    return <span>Fetching</span>;
  } else if (status === 'error') {
    return <span>There was an error</span>;
  } else if (status === 'fetched' && !Array.isArray(data)) {
    return <span>There was an unexpected error.</span>;
  }

  return <Listings data={data!.filter(({ mlsId }) => Boolean(saved[String(mlsId)]))} />;
};

export default SavedListingsPage;
