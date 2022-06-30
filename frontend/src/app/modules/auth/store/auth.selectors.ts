import { createSelector } from '@ngrx/store';
import { StoreStateInterface } from '../../../store';
import { AuthStateInterface } from './auth.reducer';

export const authFeatureSelector = (state: StoreStateInterface): AuthStateInterface => state.auth;

export const getUserSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => state.currentUser);
export const isLoggedInSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => state.isLoggedIn);
export const isLoggedOutSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => !state.isLoggedIn);
export const getTokenSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => state.token);
export const isLoadingSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => state.isLoading);

export const showSidenavSelector = createSelector(authFeatureSelector, (state: AuthStateInterface) => state.isLoggedIn && !state.hideSidenav);
