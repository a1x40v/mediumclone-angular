import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/auth-state.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, loginAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, loginSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, loginFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);
