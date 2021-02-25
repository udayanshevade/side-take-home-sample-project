import React from 'react';
import IconEmpty from '../Icons/LikeEmpty';
import IconFilled from '../Icons/LikeFilled';
import useSavedListings from './useSavedListings';

const Save = ({ mlsId }: { mlsId: number }) => {
  const [saved, persistListings] = useSavedListings();
  const isSaved = Boolean(saved[String(mlsId)]);
  const onClick = () => {
    persistListings(mlsId, !isSaved);
  };
  return isSaved ? <IconFilled onClick={onClick} /> : <IconEmpty onClick={onClick} />;
};

export default Save;
