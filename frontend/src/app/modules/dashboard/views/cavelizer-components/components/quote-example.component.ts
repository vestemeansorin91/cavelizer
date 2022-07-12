import {Component} from "@angular/core";

@Component({
  selector: 'app-quote-example',
  template: `
    <mat-expansion-panel [expanded]="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cavelizer-quote</strong>
        </mat-panel-title>
        <mat-panel-description>
          Creat de Alex sper
        </mat-panel-description>
      </mat-expansion-panel-header>

      <div class="flex gap--30 flex--1">
        <cavelizer-quote avatar="https://randomuser.me/api/portraits/men/52.jpg">
          <ng-container message>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie.
            You will get all what you need by writiing a text here “
          </ng-container>
          <ng-container author>Florin Matei</ng-container>
        </cavelizer-quote>

        <cavelizer-quote avatar="">
          <ng-container message>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie.
            You will get all what you need by writiing a text here “
          </ng-container>
          <ng-container author>Alex a plecat</ng-container>
        </cavelizer-quote>

        <cavelizer-quote avatar="https://randomuser.me/api/portraits/men/54.jpg">
          <ng-container message>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie.
            You will get all what you need by writiing a text here “
          </ng-container>
          <ng-container author>Florin Matei</ng-container>
        </cavelizer-quote>
      </div>
    </mat-expansion-panel>
  `,
})
export class QuoteExampleComponent {
  quote1AreVariabila = 'https://randomuser.me/api/portraits/men/54.jpg';
  message = 'This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiin';
  author = 'Alex a plecat';
}
