import { createReducer, on } from '@ngrx/store';
import { JwtPayloadInterface } from 'src/app/shared/types/jwt-payload.interface';
import { avatarRemoveSuccess, avatarUploadSuccess } from './auth.actions';
import { authActions } from './index';

export interface AuthStateInterface {
  currentUser: JwtPayloadInterface;
  token: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  hideSidenav: boolean;
}

export const initialState: AuthStateInterface = {
  currentUser: {} as JwtPayloadInterface,
  token: '',
  isLoading: false,
  isLoggedIn: false,
  hideSidenav: false
};

export const authReducer = createReducer<AuthStateInterface>(
  initialState,
  on(authActions.signIn, state => ({
    ...state,
    isLoading: true
  })),
  on(authActions.signInSuccess, avatarUploadSuccess, avatarRemoveSuccess, state => ({
    ...state,
    isLoading: false
  })),
  on(authActions.signInFailure, state => ({
    ...state,
    isLoading: false
  })),
  on(authActions.logoutAction, state => ({
    ...state,
    ...initialState
  })),
  on(
    authActions.getCurrentUser,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
      isLoggedIn: false
    })
  ),
  on(
    authActions.getCurrentUserSuccess,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    authActions.getCurrentUserFailure,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false
    })
  ),
  on(
    authActions.setHideSidenav,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      hideSidenav: action.shouldHide
    })
  )
);
