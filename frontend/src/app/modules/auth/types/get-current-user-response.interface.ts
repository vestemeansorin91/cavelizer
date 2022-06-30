import { JwtPayloadInterface } from 'src/app/shared/types/jwt-payload.interface';

export interface GetCurrentUserResponseInterface {
  currentUser: JwtPayloadInterface;
}
