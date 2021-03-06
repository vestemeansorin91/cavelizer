import {Pipe, PipeTransform} from "@angular/core";
import {environment} from "../../../environments/environment";

@Pipe({
  name: "defaultImage"
})
export class DefaultImagePipe implements PipeTransform {
  transform(avatarBlobUrl: string | null | undefined): string {
    if(!!avatarBlobUrl) {
      if(avatarBlobUrl.startsWith('http://') ||  avatarBlobUrl.startsWith('https://')) {
        return avatarBlobUrl;
      }
      const prefix = environment.baseUrl;
      return  prefix + "/" + avatarBlobUrl;
    }

    return '/assets/default-avatar.jpeg';
  }
}
