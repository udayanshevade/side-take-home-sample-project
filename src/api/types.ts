/**
 * SimplyRETS api request/response data types
 * Currently adding this here simply, but can re-evaluate the folder structure later.
 * - Unclear whether any fields can have default `null` values from the sample data, would be good to verify.
 * - Add a more detailed interface as it becomes necessary, currently only typing the required data.
 */
export interface ApiResProperty {
  area: number;
  bathsFull: number;
  bathsHalf: number;
  bedrooms: number;
}

export interface ApiResAddress {
  city: string | null;
  country: string | null;
  crossStreet: string | null;
  full: string | null;
  postalCode: string | null;
  state: string | null;
  streetName: string | null;
  streetNumberText: string | null;
  streetNumber: number | null;
  unit: string | null;
}

export interface ApiResListing {
  address: ApiResAddress;
  listDate: string | null;
  listPrice: number | null;
  mlsId: number;
  photos: string[];
  property: ApiResProperty;
}
