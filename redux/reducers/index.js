// @flow
import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import search from './search';
import sort from './sortType';

export default () => combineReducers<Object, Object>({
  movies,
  search,
  movie,
  sort,
});
