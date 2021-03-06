import React from 'react';
import Listings from '../../components/Listings';
import * as apiTypes from '../../api/SimplyRets/types';

const ListingsPage = ({ saved, persistListings, status, data }: {
  saved: { [id: string]: boolean };
  persistListings: (id: number, toSave: boolean) => void;
  status: string;
  data: apiTypes.ApiResListing[] | null
}) => {
  // TODO: handle additional views for a better experience
  if (status === 'fetching') {
    return null;
  } else if (status === 'error') {
    return null;
  } else if (status === 'fetched' && !Array.isArray(data)) {
    return null;
  }

  return <Listings data={data!} saved={saved} persistListings={persistListings} />;
};

export default ListingsPage;
