import { createReducer, on } from '@ngrx/store';

import { CreateArticleStateInterface } from '../types/create-article-state.interface';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/create-article.action';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

export const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);
