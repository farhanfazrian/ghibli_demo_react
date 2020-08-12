/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_DATA, LOAD_DATA_ERROR, LOAD_DATA_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  data: {
    loading: false,
    error: false,
    movies: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA:
        draft.data.loading = true;
        draft.data.error = false;
        draft.data.movies = false;
        break;

      case LOAD_DATA_SUCCESS:
        draft.data.loading = false;
        draft.data.movies = action.payload.movies;
        break;

      case LOAD_DATA_ERROR:
        draft.data.loading = false;
        draft.data.error = action.error;
        break;
    }
  });

export default appReducer;
