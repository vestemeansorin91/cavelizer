export enum ActionTypes {
  SIGN_IN = '[Auth] sign in',
  SIGN_IN_SUCCESS = '[Auth] sign in success',
  SIGN_IN_FAILURE = '[Auth] sign in failure',

  SIGN_UP = '[Auth] sign up',
  SIGN_UP_SUCCESS = '[Auth] sign up success',
  SIGN_UP_FAILURE = '[Auth] sign up failure',

  FORGOT_PASSWORD = '[Auth] forgot password',
  FORGOT_PASSWORD_SUCCESS = '[Auth] forgot password success',
  FORGOT_PASSWORD_FAILURE = '[Auth] forgot password failure',

  RESET_PASSWORD = '[Auth] reset password',
  RESET_PASSWORD_SUCCESS = '[Auth] reset password success',
  RESET_PASSWORD_FAILURE = '[Auth] reset password failure',

  GET_CURRENT_USER = '[Auth] get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] get current user failure',

  /* TODO: Should be moved to own store (profile) */
  AVATAR_UPLOAD = '[Profile] Avatar upload',
  AVATAR_UPLOAD_SUCCESS = '[Profile] Avatar upload success',
  AVATAR_UPLOAD_FAILURE = '[Profile] Avatar upload failure',

  /* TODO: Should be moved to own store (profile) */
  AVATAR_REMOVE = '[Profile] Avatar remove',
  AVATAR_REMOVE_SUCCESS = '[Profile] Avatar remove success',
  AVATAR_REMOVE_FAILURE = '[Profile] Avatar remove failure',

  LOGOUT = '[Auth] logout',
  SET_SIDENAV = '[Auth] set sidenav'
}
