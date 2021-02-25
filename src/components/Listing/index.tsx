import React from 'react';
import dateFormat from 'date-fns/format';

interface ListingProps {
  address: { full: string };
  area: number;
  bedrooms: number;
  fullBaths: number;
  halfBaths: number;
  listDate: string;
  listPrice: number;
  photo: string;
}

const outputFormat = 'M/d/yy';

const Listing = ({
  address,
  area,
  bedrooms,
  fullBaths,
  halfBaths,
  listDate,
  listPrice,
  photo,
}: ListingProps) => (
  <section className="listing-container" role="article">
    <div className="listing-picture-container">
      <picture className="listing-picture">
        {photo && (
          <img
            alt={`Photograph of ${address.full}`}
            className="listing-img"
            src={photo}
          />
        )}
      </picture>
    </div>
    <div className="listing-info">
      <div className="listing-info__details">
        <span className="listing-info__detail">{bedrooms} BR</span>
        <span className="listing-info__detail">
          {fullBaths + 0.5 * halfBaths} Bath
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
