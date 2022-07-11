import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material/checkbox';

interface CavelizerCheckboxChange {
  source: CheckboxComponent | MatCheckboxChange;
  checked: boolean;
}

const CAVELIZER_CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'cavelizer-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CAVELIZER_CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() radio = false;
  @Input() readonly = false;
  public _checked = false;
  public onTouched = () => {};

  @Output() public change = new EventEmitter<CavelizerCheckboxChange>();
  private propagateChange: any = () => {};

  @Input() set value(v: any) {
    this.writeValue(v);
  }

  public writeValue(value: any): void {
    this._checked = value;
  }

  public onInput(e: any): void {
    if (!this.disabled) {
      if (!this.radio) {
        this._checked = !this._checked;
      } else {
      }
      this.change.emit({
        source: this,
        checked: this._checked
      });
      this.propagateChange(this._checked);
      this.onTouched();
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
