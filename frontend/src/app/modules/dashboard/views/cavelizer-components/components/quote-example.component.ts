import {Component} from "@angular/core";

@Component({
  selector: 'app-quote-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cavelizer-quote</strong>
        </mat-panel-title>
        <mat-panel-description>
          Creat de Alex sper
        </mat-panel-description>
      </mat-expansion-panel-header>

      <!-- CONTINUT-->
      <cavelizer-quote></cavelizer-quote>
      <cavelizer-quote class="light sick big"></cavelizer-quote>
      <cavelizer-quote class="sick"></cavelizer-quote>
      <cavelizer-quote class="big"></cavelizer-quote>
    </mat-expansion-panel>
  `,
})
export class QuoteExampleComponent {

}
