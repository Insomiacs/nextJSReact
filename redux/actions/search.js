// @flow

export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_SEARCH_TYPE = 'UPDATE_SEARCH_TYPE';

export const updateSearchQuery = (query: string) => ({
  type: UPDATE_SEARCH_QUERY,
  payload: query,
});

export const selectSearchType = (type: string) => ({
  type: UPDATE_SEARCH_TYPE,
  payload: type,
});
