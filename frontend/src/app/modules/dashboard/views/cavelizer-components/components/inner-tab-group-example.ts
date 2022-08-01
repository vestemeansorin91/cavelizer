import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-tab-group-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-inner-tab-group</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <cvz-inner-tab-group>
      <cvz-inner-tab tabTitle="Tab 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis deleniti dignissimos doloremque
        dolorum error expedita, explicabo illo illum impedit libero minus officiis porro quasi quidem reiciendis
        reprehenderit, repudiandae soluta.
      </cvz-inner-tab>
      <cvz-inner-tab tabTitle="Tab 2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at aut autem cumque, et eum, explicabo fuga ipsum
        iste laborum laudantium necessitatibus nesciunt odio quam qui, ratione repudiandae. Nobis, reprehenderit!
      </cvz-inner-tab>
      <cvz-inner-tab tabTitle="Tab 3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur consequatur dolorum eaque quas
        sint ut voluptatibus. Aperiam dolore, eum ex inventore itaque quidem quis tempora velit veniam voluptatum?
        Quidem!
      </cvz-inner-tab>
    </cvz-inner-tab-group>

    <cvz-inner-tab-group class="theme-v1">
      <cvz-inner-tab tabTitle="Description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis deleniti dignissimos doloremque
        dolorum error expedita, explicabo illo illum impedit libero minus officiis porro quasi quidem reiciendis
        reprehenderit, repudiandae soluta.
      </cvz-inner-tab>
      <cvz-inner-tab tabTitle="Reviews" [counter]="18">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at aut autem cumque, et eum, explicabo fuga ipsum
        iste laborum laudantium necessitatibus nesciunt odio quam qui, ratione repudiandae. Nobis, reprehenderit!
      </cvz-inner-tab>
      <cvz-inner-tab tabTitle="Questions" [counter]="4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur consequatur dolorum eaque quas
        sint ut voluptatibus. Aperiam dolore, eum ex inventore itaque quidem quis tempora velit veniam voluptatum?
        Quidem!
      </cvz-inner-tab>
    </cvz-inner-tab-group>
  </mat-expansion-panel>`
})
export class InnerTabGroupExample {}
