import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { ArticleStateInterface } from '../types/article-state.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/get-article.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.article,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
);
