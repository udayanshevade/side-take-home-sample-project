import { useState, useEffect, useCallback } from 'react';
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

export default useSavedListings;
