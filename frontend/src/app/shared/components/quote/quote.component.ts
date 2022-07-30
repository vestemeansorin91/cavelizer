import { Component, Input } from '@angular/core';

@Component({
  selector: 'cvz-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() public avatar = '';
}
