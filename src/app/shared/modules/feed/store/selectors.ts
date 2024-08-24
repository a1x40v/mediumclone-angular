import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FeedStateInterface } from '../types/feed-state.interface';

export const authFeatureSelector =
  createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  authFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
