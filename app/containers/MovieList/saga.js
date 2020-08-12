/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import request from 'utils/request';
import { dataLoaded, dataLoadingError } from '../App/actions';

/**
 * Gibli movie data request/response handler
 */
export function* getMovies() {
  const requestURL = `https://ghibliapi.herokuapp.com/films`;

  try {
    // Call our request helper (see 'utils/request')
    const movies = yield call(request, requestURL);
    yield put(dataLoaded(movies));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  yield takeLatest(LOAD_DATA, getMovies);
}
