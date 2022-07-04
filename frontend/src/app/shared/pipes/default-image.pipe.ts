import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "defaultImage"
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return !!value ? value : 'https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1320751178?k=20&m=1320751178&s=612x612&w=0&h=qBg0zl3GQvll4dI5m0VDidziZN5VWnghNQ2rt-6aln0=';
  }
}
