import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

/**
 * Load the data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_DATA
 */
export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

/**
 * Dispatched when the DATA are loaded by the request saga
 *
 * @param  {array} movies The movies data
 *
 * @return {object}      An action object with a type of LOAD_DATA_SUCCESS passing the repos
 */
export function dataLoaded(movies) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      movies,
    },
  };
}

/**
 * Dispatched when loading the data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_DATA_ERROR passing the error
 */
export function dataLoadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}
