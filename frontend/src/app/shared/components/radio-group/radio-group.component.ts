import { AfterContentInit, Component, ContentChildren, forwardRef, Input, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioItemBase } from './radio-item.base';

export const CVZ_RADIO_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'cvz-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [CVZ_RADIO_INPUT_VALUE_ACCESSOR]
})
export class RadioGroupComponent implements ControlValueAccessor, AfterContentInit {
  public disabled: boolean = false;
  @ContentChildren(RadioItemBase)
  public buttons: QueryList<RadioItemBase> = new QueryList<RadioItemBase>();
  public _selectedValue: any = null;

  constructor() {
    this.buttons.changes.subscribe(btns => {
      this.updateSelectedValue();
    });
  }

  @Input() set value(v: any) {
    this.writeValue(v);
  }

  public onTouched(): void {}

  public ngAfterContentInit(): void {
    this.updateSelectedValue();
  }

  public writeValue(value: any): void {
    this._selectedValue = value;
    this.updateSelectedValue();
  }

  public updateSelectedValue(): void {
    this.buttons.toArray().forEach(b => {
      b.setActive(false);
      if (b.value === this._selectedValue) {
        b.setActive(true);
      }
    });
  }

  public setValue(value: any): void | null {
    if (this.disabled) {
      return null;
    }
    this._selectedValue = value;
    this.updateSelectedValue();
    this.propagateChange(this._selectedValue);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private propagateChange(e: any): void {}
}
