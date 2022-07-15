import {environment} from 'src/environments/environment';
import {AuthEffects} from '../modules/auth/store/auth.effects';
import {authReducer, AuthStateInterface} from '../modules/auth/store/auth.reducer';
import {Features} from './features';

export interface StoreStateInterface {
  [Features.auth]: AuthStateInterface;
}

export const reducers = {
  [Features.auth]: authReducer
};

export * from './meta-reducers';

export const strictStateChecks = !environment.production;

export const effects = [AuthEffects];
