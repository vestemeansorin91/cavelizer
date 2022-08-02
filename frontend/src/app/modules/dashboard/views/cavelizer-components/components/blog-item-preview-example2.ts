import { Component } from '@angular/core';
import { BlogItemPreviewInterface } from '../../../../../shared/models/interfaces/blog-item-preview.interface';

@Component({
  selector: 'app-blog-item-preview-example2',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>app-blog-item-preview-example2</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>

    <!--    <cvz-blog-item-preview [blog]="blog"></cvz-blog-item-preview>-->
    <pre>{{ blog | json }}</pre>
  </mat-expansion-panel>`
})
export class BlogItemPreviewExample2 {
  public blog: BlogItemPreviewInterface = {
    tags: ['stire false', 'frumos', 'urat'],
    title: 'Stire foarte neadevarata fix de la Talmaciu',
    authorAvatar: 'https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000',
    authorName: 'Alexandrescu Mihaescu',
    backgroundBlobUrl: 'https://ziarharghita.ro/wp-content/uploads/2020/04/tir.jpg',
    date: new Date()
  };
}
