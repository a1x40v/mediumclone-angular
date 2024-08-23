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
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/get-current-user.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  })),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailureAction, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  }))
);
