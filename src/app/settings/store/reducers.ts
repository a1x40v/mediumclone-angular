import { createReducer, on } from '@ngrx/store';

import { SettingsStateInterface } from '../types/settings-state.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../auth/store/actions/update-current-user.action';

const initialState: SettingsStateInterface = {
  isSumbitting: false,
  validationErrors: null,
};

export const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state) => ({
    ...state,
    isSumbitting: true,
  })),
  on(updateCurrentUserSuccessAction, (state) => ({
    ...state,
    isSumbitting: false,
  })),
  on(updateCurrentUserFailureAction, (state, action) => ({
    ...state,
    isSumbitting: false,
    validationErrors: action.errors,
  }))
);
