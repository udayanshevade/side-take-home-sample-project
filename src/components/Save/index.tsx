import React from 'react';
import IconEmpty from '../Icons/LikeEmpty';
import IconFilled from '../Icons/LikeFilled';

const Save = ({
  mlsId,
  saved,
  persistListings,
}: {
  mlsId: number;
  saved: { [id: string]: boolean };
  persistListings: (id: number, toSave: boolean) => void;
}) => {
  const isSaved = Boolean(saved[String(mlsId)]);
  const onClick = () => {
    persistListings(mlsId, !isSaved);
  };
  return isSaved ? (
    <IconFilled onClick={onClick} />
  ) : (
    <IconEmpty onClick={onClick} />
  );
};

export default Save;
