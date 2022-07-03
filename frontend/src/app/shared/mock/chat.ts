import {faker} from '@faker-js/faker';

export enum ChatContactStatusEnum {
  'online' = 'online',
  'offline' = 'offline',
  'away' = 'away',
  'dont-disturb' = 'dont-disturb'
}

export interface ChatContact {
  fullName: string;
  lastMessage: string;
  lastMessageTime: Date;
  avatarBlobUrl: string;
  status: ChatContactStatusEnum;
}

export function generateRandomContact(): ChatContact {
  return {
    fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
    lastMessage: faker.lorem.text(),
    lastMessageTime: faker.date.recent(),
    avatarBlobUrl: faker.image.avatar(),
    status: ChatContactStatusEnum.online
  };
}
