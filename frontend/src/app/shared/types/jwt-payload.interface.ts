export interface JwtPayloadInterface {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  gender: string;
  isActive: boolean;
  isAdmin: boolean;
  avatarBlobUrl?: string;
}
