import {createAction, props} from '@ngrx/store';
import {ApiErrorsInterface} from 'src/app/shared/types/api-errors.interface';
import {JwtPayloadInterface} from 'src/app/shared/types/jwt-payload.interface';
import {
  ForgotPasswordPayloadInterface,
  GetCurrentUserResponseInterface,
  ResetPasswordPayloadInterface,
  SignInPayloadInterface,
  SignInResponseInterface,
  SignUpPayloadInterface
} from '../types';
import {ActionTypes} from './action.types';

/*    Sign in   */
export const signIn = createAction(ActionTypes.SIGN_IN, props<SignInPayloadInterface>());
export const signInSuccess = createAction(ActionTypes.SIGN_IN_SUCCESS, props<SignInResponseInterface>());
export const signInFailure = createAction(ActionTypes.SIGN_IN_FAILURE, props<{ errors: ApiErrorsInterface }>());

/*    Sign up   */
export const signUp = createAction(ActionTypes.SIGN_UP, props<{payload: SignUpPayloadInterface}>());
export const signUpSuccess = createAction(ActionTypes.SIGN_UP_SUCCESS, props<JwtPayloadInterface>());
export const signUpFailure = createAction(ActionTypes.SIGN_UP_FAILURE, props<{ errors: ApiErrorsInterface }>());

/*    Forgot password   */
export const forgotPassword = createAction(ActionTypes.FORGOT_PASSWORD, props<ForgotPasswordPayloadInterface>());
export const forgotPasswordSuccess = createAction(ActionTypes.FORGOT_PASSWORD_SUCCESS);
export const forgotPasswordFailure = createAction(ActionTypes.FORGOT_PASSWORD_FAILURE, props<{ errors: ApiErrorsInterface }>());

/*    Reset password   */
export const resetPassword = createAction(ActionTypes.RESET_PASSWORD, props<ResetPasswordPayloadInterface>());
export const resetPasswordSuccess = createAction(ActionTypes.RESET_PASSWORD_SUCCESS);
export const resetPasswordFailure = createAction(ActionTypes.RESET_PASSWORD_FAILURE, props<{ errors: ApiErrorsInterface }>());

/*    Get current user   */
export const getCurrentUser = createAction(ActionTypes.GET_CURRENT_USER);
export const getCurrentUserSuccess = createAction(ActionTypes.GET_CURRENT_USER_SUCCESS, props<GetCurrentUserResponseInterface>());
export const getCurrentUserFailure = createAction(ActionTypes.GET_CURRENT_USER_FAILURE, props<{ errors: ApiErrorsInterface }>());

/* TODO: Should be moved to own store (profile) */
/*    Avatar update   */
export const avatarUpdate = createAction(ActionTypes.AVATAR_UPDATE, props<{file: File | null}>());
export const avatarUpdateSuccess = createAction(ActionTypes.AVATAR_UPDATE_SUCCESS, props<SignInResponseInterface>());
export const avatarUpdateFailure = createAction(ActionTypes.AVATAR_UPDATE_FAILURE, props<{ errors: ApiErrorsInterface }>());

export const logoutAction = createAction(ActionTypes.LOGOUT);
export const setHideSidenav = createAction(ActionTypes.SET_SIDENAV, props<{ shouldHide: boolean }>());
