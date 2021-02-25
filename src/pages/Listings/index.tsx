import React from 'react';
import Listings from '../../components/Listings';
import useLoadListingsData from './useLoadListingsData';

const ListingsPage = () => {
  const [{ status, data }] = useLoadListingsData();

  // TODO: handle additional views for a better experience
  if (status === 'fetching') {
    return null;
  } else if (status === 'error') {
    return null;
  } else if (status === 'fetched' && !Array.isArray(data)) {
    return null;
  }

  return <Listings data={data!} />;
};

export default ListingsPage;
