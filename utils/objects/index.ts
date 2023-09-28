import { PaginatedObjectsResponse } from '@mysten/sui.js/src/types/objects';

import {
  GetAllOwnedObjectsArgs,
  GetAllOwnedObjectsInternalArgs,
} from './objects.types';

const getAllOwnedObjectsInternal = async ({
  provider,
  data,
  cursor,
  options,
  filter,
  owner,
}: GetAllOwnedObjectsInternalArgs): Promise<
  PaginatedObjectsResponse['data']
> => {
  const newData = await provider.getOwnedObjects({
    owner,
    options,
    filter,
    cursor,
  });
  const nextData = data.concat(newData.data);

  if (!newData.hasNextPage) return nextData;

  return getAllOwnedObjectsInternal({
    data: nextData,
    cursor: newData.nextCursor,
    owner,
    provider,
    options,
    filter,
  });
};

export const getAllOwnedObjects = async ({
  owner,
  options,
  filter,
  provider,
}: GetAllOwnedObjectsArgs) => {
  const data = await provider.getOwnedObjects({
    owner,
    options,
    filter,
  });

  return data.hasNextPage
    ? getAllOwnedObjectsInternal({
        data: data.data,
        cursor: data.nextCursor,
        options,
        owner,
        provider,
        filter,
      })
    : data.data;
};
