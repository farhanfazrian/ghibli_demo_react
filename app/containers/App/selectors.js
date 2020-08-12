/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectDataLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data.loading,
  );

const makeSelectDataError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data.error,
  );

const makeSelectData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data.movies,
  );

export {
  selectGlobal,
  makeSelectDataLoading,
  makeSelectDataError,
  makeSelectData,
};
