export interface ResetPasswordPayloadInterface {
  code: string;
  email: string;
  password: string;
  confirmPassword: string;
}
