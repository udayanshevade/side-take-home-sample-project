import React, { useState, useEffect, useCallback } from 'react';
import IconEmpty from '../Icons/LikeEmpty';
import IconFilled from '../Icons/LikeFilled';
import * as storageApi from '../../api/save';

const useSavedListings = () => {
  const [savedListings, setSavedListings] = useState<{ [id: string]: true }>({});

  // store the listings (local storage for now)
  // using a callback so that persistListings
  const persistListings = useCallback(
    (id: number, toBeSaved: boolean) => {
      let toSave = { ...savedListings };
      if (toBeSaved) {
        toSave[id] = true;
      } else {
        const { [id]: _, ...restListings } = savedListings;
        toSave = restListings;
      }
      storageApi.storeSavedListings(toSave);
      setSavedListings(toSave);
    },
    [savedListings, setSavedListings],
  );

  useEffect(() => {
    const saved = storageApi.getSavedListings();
    if (saved) setSavedListings(saved);
  }, []);

  return [savedListings, persistListings] as const;
};

const Save = ({ mlsId }: { mlsId: number }) => {
  const [saved, persistListings] = useSavedListings();
  const isSaved = Boolean(saved[String(mlsId)]);
  const onClick = () => {
    persistListings(mlsId, !isSaved);
  };
  return isSaved ? <IconFilled onClick={onClick} /> : <IconEmpty onClick={onClick} />;
};

export default Save;
