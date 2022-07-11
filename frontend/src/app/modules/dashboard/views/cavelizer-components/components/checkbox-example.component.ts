import {Component} from '@angular/core';

@Component({
  selector: 'app-checkbox-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-checkbox</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

   <div class="flex--column gap--16">
     <cavelizer-input-group>
       <cavelizer-checkbox [(ngModel)]="agreeWithTerms">Agree with terms and policy</cavelizer-checkbox>
     </cavelizer-input-group>

     <cavelizer-checkbox [(ngModel)]="doYouLikeCavelizer">Do you like cavelizer?</cavelizer-checkbox>
     <cavelizer-checkbox [(ngModel)]="disabledByDefault" [disabled]="true">This checkbox is disabled by default</cavelizer-checkbox>
     <cavelizer-checkbox [(ngModel)]="disabledByDefaultAndTrue" [disabled]="true">This checkbox is disabled by default and true</cavelizer-checkbox>
   </div>

  </mat-expansion-panel>`
})
export class CheckboxExampleComponent {
  public agreeWithTerms = false;
  public doYouLikeCavelizer = false;
  public disabledByDefault = false;
  public disabledByDefaultAndTrue = true;
}
