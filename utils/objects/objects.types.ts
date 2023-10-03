import { JsonRpcProvider } from '@mysten/sui.js';
import { SuiObjectDataFilter } from '@mysten/sui.js/dist/types/objects';
import {
  PaginatedObjectsResponse,
  SuiObjectDataOptions,
} from '@mysten/sui.js/src/types/objects';

export interface GetAllOwnedObjectsInternalArgs {
  cursor: PaginatedObjectsResponse['nextCursor'];
  options?: SuiObjectDataOptions;
  filter?: SuiObjectDataFilter;
  data: PaginatedObjectsResponse['data'];
  owner: string;
  provider: JsonRpcProvider;
}
export interface GetAllOwnedObjectsArgs {
  provider: JsonRpcProvider;
  owner: string;
  options?: SuiObjectDataOptions;
  filter?: SuiObjectDataFilter;
}
