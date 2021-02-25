import React from 'react';
import Listing from '../Listing';
import * as types from '../../api/SimplyRets/types';
import './index.scss';

const Listings = ({ data }: { data: types.ApiResListing[] }) => (
  <section className="listings-container">
    {data!.map((listingData) => (
      <Listing key={listingData.mlsId} {...listingData} />
    ))}
  </section>
);

export default Listings;
