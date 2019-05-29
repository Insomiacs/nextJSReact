// @flow
import { createSelector } from 'reselect';
import _ from 'lodash';

type State = {
    state: Object
}

export const getMovies: State => Object = createSelector(
  (state: Object) => state.movies.items,
  (state: Object) => state.search.searchQuery,
  (state: Object) => state.search.type,
  (state: Object) => state.sort.type,
    (movies, searchQuery, searchType, sortType) => { //eslint-disable-line
    const titleSearch = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const genreSearch = movies.filter(movie => movie.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())));
    return searchType === 'title' ? _.sortBy(titleSearch, movie => movie[sortType]) : _.sortBy(genreSearch, movie => movie[sortType]);
  },
);
