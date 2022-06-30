export interface SignUpPayloadInterface {
  fullName: string;
  username: string;
  password: string;
  email: string;
  gender: 'men' | 'women' | 'all';
}
