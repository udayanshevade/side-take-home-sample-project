import React from 'react';
import Listing from '../Listing';
import * as types from '../../api/SimplyRets/types';
import './index.scss';

const Listings = ({
  data,
  saved,
  persistListings,
}: {
  data: types.ApiResListing[];
  saved: { [id: string]: boolean };
  persistListings: (id: number, toSave: boolean) => void
}) => (
  <section className="listings-container">
    {data!.map((listingData) => (
      <Listing
        key={listingData.mlsId}
        {...listingData}
        saved={saved}
        persistListings={persistListings}
      />
    ))}
  </section>
);

export default Listings;
