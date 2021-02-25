/**
 * SimplyRETS api request/response data types
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
  full: string | null;
}

export interface ApiResListing {
  address: ApiResAddress;
  listDate: string;
  listPrice: number;
  mlsId: number;
  photos: string[];
  property: ApiResProperty;
}
