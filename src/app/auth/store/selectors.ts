import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../types/auth-state.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSumbittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
