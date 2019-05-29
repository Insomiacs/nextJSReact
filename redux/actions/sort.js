// @flow
export const UPDATE_SORT_TYPE = 'UPDATE_SORT_TYPE';

export const updateSortType = (type: string) => ({
  type: UPDATE_SORT_TYPE,
  payload: type,
});
