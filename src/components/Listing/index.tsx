import React from 'react';
import dateFormat from 'date-fns/format';
import * as types from '../../api/SimplyRets/types';

const outputFormat = 'M/d/yy';

const Listing = ({
  address,
  listDate,
  listPrice,
  photos,
  property: { area, bedrooms, bathsFull, bathsHalf },
}: types.ApiResListing) => (
  <section className="listing-container" role="article">
    <div className="listing-picture-container">
      <picture className="listing-picture">
        {photos.length && (
          <img
            alt={`Photograph of ${address.full}`}
            className="listing-img"
            src={photos[0]}
          />
        )}
      </picture>
    </div>
    <div className="listing-info">
      <div className="listing-info__details">
        <span className="listing-info__detail">{bedrooms} BR</span>
        <span className="listing-info__detail">
          {bathsFull + 0.5 * bathsHalf} Bath
        </span>
        <span className="listing-info__detail">{area} Sq Ft</span>
      </div>
      <div className="listing-price">{listPrice}</div>
      <address className="listing-address">{address.full}</address>
      <div className="listing-date">
        {dateFormat(new Date(listDate), outputFormat)}
      </div>
    </div>
  </section>
);

export default Listing;
