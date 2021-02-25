import React from 'react';
import Listing from '../../components/Listing';
import useLoadListingsData from './useLoadListingsData';
import './index.scss';

const Listings = () => {
  const [{ status, data }] = useLoadListingsData();
  if (status === 'fetching') {
    return <span>Fetching</span>;
  } else if (status === 'error') {
    return <span>There was an error</span>;
  } else if (status === 'fetched' && !Array.isArray(data)) {
    return <span>There was an unexpected error.</span>;
  }

  return (
    <section className="listings-container">
      {data!.map((listingData) => (
        <Listing key={listingData.mlsId} {...listingData} />
      ))}
    </section>
  );
};

export default Listings;
