import { createReducer, on } from '@ngrx/store';

import { FeedStateInterface } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/get-feed.action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(getFeedFailureAction, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
);
