import { AfterViewInit, Component, Host, HostListener, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputGroupComponent } from '../input-group/input-group.component';

@Component({
  selector: 'cvz-label',
  templateUrl: './label.component.html'
})
export class LabelComponent implements AfterViewInit, OnDestroy {
  public displayRedLabel = false;
  private subscription: Subscription = new Subscription();

  constructor(@Host() @Optional() private inputGroup: InputGroupComponent) {}

  @HostListener('click', ['$event'])
  public onClick(e: any) {
    this.inputGroup.onLabelClicked(e);
  }

  ngAfterViewInit(): void {
    if (!this.inputGroup) {
      console.warn('cave-label needs to be inside a cave-input-group');
      return;
    }

    this.subscription = this.inputGroup.displayRedLabel$.subscribe(
      displayRedLabel => (this.displayRedLabel = displayRedLabel)
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
