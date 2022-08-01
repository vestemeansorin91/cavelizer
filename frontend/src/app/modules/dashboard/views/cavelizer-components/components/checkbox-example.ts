import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-example',
  template: ` <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-checkbox</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin</mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex--column gap--16">
      <cvz-input-group>
        <cvz-checkbox [(ngModel)]="agreeWithTerms">Agree with terms and policy</cvz-checkbox>
      </cvz-input-group>

      <cvz-checkbox [(ngModel)]="doYouLikeCavelizer">Do you like cavelizer?</cvz-checkbox>
      <cvz-checkbox [(ngModel)]="disabledByDefault" [disabled]="true"
        >This checkbox is disabled by default
      </cvz-checkbox>
      <cvz-checkbox [(ngModel)]="disabledByDefaultAndTrue" [disabled]="true"
        >This checkbox is disabled by default and true
      </cvz-checkbox>
    </div>
  </mat-expansion-panel>`
})
export class CheckboxExample {
  public agreeWithTerms = false;
  public doYouLikeCavelizer = false;
  public disabledByDefault = false;
  public disabledByDefaultAndTrue = true;
}
