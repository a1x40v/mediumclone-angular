import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/auth-state.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({ ...state, isSubmitting: true }))
);
