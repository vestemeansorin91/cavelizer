import {Component} from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
})
export class ButtonExampleComponent {
  public size: 'big' | 'small' | '' = '';
  public style: 'grey' | 'transparent' | 'white' | '' = '';

}
