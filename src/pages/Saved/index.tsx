import React from 'react';
import Listings from '../../components/Listings';
import * as apiTypes from '../../api/SimplyRets/types';

const SavedListingsPage = ({ saved, persistListings, status, data }: {
  saved: { [id: string]: boolean };
  persistListings: (id: number, toSave: boolean) => void;
  status: string;
  data: apiTypes.ApiResListing[] | null
}) => {
  // TODO: refactor/cleanup here for reuse
  if (status === 'fetching') {
    return <span>Fetching</span>;
  } else if (status === 'error') {
    return <span>There was an error</span>;
  } else if (status === 'fetched' && !Array.isArray(data)) {
    return <span>There was an unexpected error.</span>;
  }

  return (
    <Listings
      data={data!.filter(({ mlsId }) => Boolean(saved[String(mlsId)]))}
      saved={saved}
      persistListings={persistListings}
    />
  );
};

export default SavedListingsPage;
