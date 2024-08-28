import { createReducer, on } from '@ngrx/store';

import { PopularTagsStateInterface } from '../types/popular-tags-state.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/get-popular-tags.action';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.popularTags,
  })),
  on(getPopularTagsFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
);
