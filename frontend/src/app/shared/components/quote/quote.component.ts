import {Component} from "@angular/core";

@Component({
  selector: 'cavelizer-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  public text: string = '';
}
