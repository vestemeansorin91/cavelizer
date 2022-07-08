import {Component} from '@angular/core';

@Component({
  selector: 'app-button-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cavelizer-button</strong>
        </mat-panel-title>
        <mat-panel-description>
          Creat de Sorin
        </mat-panel-description>
      </mat-expansion-panel-header>

      <!-- TODO: Petrut replace all
               <i class="las la-angle-left" prefix></i>
               <i class="las la-angle-right" suffix></i> -->
      <div style="display: flex; gap: 16px; flex-direction: column; align-items: flex-start">
        <select [(ngModel)]="size">
          <option value="small">Small</option>
          <option value="">Normal</option>
          <option value="big">Big</option>
        </select>

        <select [(ngModel)]="style">
          <option value="grey">Grey</option>
          <option value="transparent">Transparent</option>
          <option value="">Normal (green)</option>
          <option value="white">White</option>
        </select>

        <span>Classes added: {{size}} {{style}}</span>
        <cavelizer-button [ngClass]="[size, style]">Submit</cavelizer-button>

        <!-- BUTOANE ALBE CU BORDURA VERDE -->
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="white big">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="white big">
            <i class="las la-angle-left" prefix></i>
            Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="white big">
            Submit cavelizer
            <i class="las la-angle-right" suffix></i>
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="white">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="white"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="white"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="white small">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="white small"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="white small"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>

        <!-- BUTOANE VERZI / MAIN -->
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="big">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="big"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="big"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button>Submit cavelizer</cavelizer-button>
          <cavelizer-button><i class="las la-angle-left" prefix></i>Submit cavelizer</cavelizer-button>
          <cavelizer-button><i class="las la-angle-right" suffix></i>Submit cavelizer</cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="small">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="small"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="small"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>

        <!-- BUTOANE GRI -->
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="big grey">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="big grey"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="big grey"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="grey">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="grey"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="grey"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="small grey">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="small grey"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="small grey"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>

        <!-- BUTOANE TRANSPARENTE -->
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="big transparent">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="big transparent"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="big transparent"><i class="las la-angle-right" suffix></i>Submit
            cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="transparent">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="transparent"><i class="las la-angle-left" prefix></i>Submit cavelizer
          </cavelizer-button>
          <cavelizer-button class="transparent"><i class="las la-angle-right" suffix></i>Submit cavelizer
          </cavelizer-button>
        </div>
        <div style="display: flex; gap: 16px">
          <cavelizer-button class="small transparent">Submit cavelizer</cavelizer-button>
          <cavelizer-button class="small transparent"><i class="las la-angle-left" prefix></i>Submit
            cavelizer
          </cavelizer-button>
          <cavelizer-button class="small transparent"><i class="las la-angle-right" suffix></i>Submit
            cavelizer
          </cavelizer-button>
        </div>
      </div>
    </mat-expansion-panel>
  `,
})
export class ButtonExampleComponent {
  public size: 'big' | 'small' | '' = '';
  public style: 'grey' | 'transparent' | 'white' | '' = '';

}
