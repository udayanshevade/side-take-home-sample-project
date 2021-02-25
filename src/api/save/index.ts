/**
 * Local placeholder for what might eventually be a REST API call
 */
export const getSavedListings = (): { [id: string]: true } | null => {
  try {
    const saves = window.localStorage.getItem('saves');
    if (saves) {
      return JSON.parse(saves);
    } else {
      return {};
    }
  } catch (err) {
    return null;
  }
};

/**
 * The returned boolean indicates whether the "call" was successful.
 * In the future, this might be a PATCH that updates the saved status via the backend.
 * The caller can use the return to judge how to handle the subsequent scenarios.
 */
export const storeSavedListings = (ids: { [id: string]: boolean }): boolean => {
  try {
    window.localStorage.setItem('saves', JSON.stringify(ids));
    return true;
  } catch (err) {
    return false;
  }
};
