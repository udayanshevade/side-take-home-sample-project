import React from 'react';
import LazyLoad from 'react-lazyload';
import dateFormat from 'date-fns/format';
import Save from '../Save';
import * as types from '../../api/SimplyRets/types';
import './index.scss';

const outputFormat = 'M/d/yy';

const formatAmount = (val: number): string => `$${val.toLocaleString()}`;

const Listing = ({
  mlsId,
  address,
  listDate,
  listPrice,
  photos,
  property: { area, bedrooms, bathsFull, bathsHalf },
  saved,
  persistListings
}: types.ApiResListing & {
  saved: { [id: string]: boolean };
  persistListings: (id: number, toSave: boolean) => void
}) => (
  <LazyLoad height={280}>
    <section className="listing-container" role="article">
      <header className="listing__header">
        <Save mlsId={mlsId} saved={saved} persistListings={persistListings} />
        <picture className="listing__picture">
          {photos.length && (
            <img
              alt={`Photograph of ${address.full}`}
              className="listing__img"
              src={photos[0]}
            />
          )}
        </picture>
      </header>
      <footer className="listing__info">
        <div className="listing__info__details">
          <span className="listing__info__detail">{bedrooms} BR</span>
          <span className="listing__info__detail-separator">|</span>
          <span className="listing__info__detail">
            {bathsFull + 0.5 * bathsHalf} Bath
          </span>
          <span className="listing__info__detail-separator">|</span>
          <span className="listing__info__detail">{area} Sq Ft</span>
        </div>
        <div className="listing__price">{formatAmount(listPrice)}</div>
        <address className="listing__address">{address.full}</address>
        <div className="listing__date">
          Listed: {dateFormat(new Date(listDate), outputFormat)}
        </div>
      </footer>
    </section>
  </LazyLoad>
);

export default Listing;
