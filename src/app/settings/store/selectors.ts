import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsStateInterface } from '../types/settings-state.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSumbitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
