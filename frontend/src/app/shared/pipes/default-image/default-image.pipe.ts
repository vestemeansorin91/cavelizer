import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(avatarBlobUrl: string | null | undefined, isAvatar: boolean = false): string {
    if (!!avatarBlobUrl) {
      if (avatarBlobUrl.startsWith('http://') || avatarBlobUrl.startsWith('https://')) {
        return avatarBlobUrl;
      }
      const prefix = environment.baseUrl;
      return prefix + '/' + avatarBlobUrl;
    }

    if (isAvatar) {
      return '';
    }

    return '/assets/default-avatar.jpeg';
  }
}
