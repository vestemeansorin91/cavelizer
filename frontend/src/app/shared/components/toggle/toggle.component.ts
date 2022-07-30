import { Component, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CAVELIZER_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleComponent),
  multi: true
};

@Component({
  selector: 'cvz-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [CAVELIZER_TOGGLE_VALUE_ACCESSOR]
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  _placeholder = '';
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  _checked = false;

  public get checked() {
    return this._checked;
  }

  @Input()
  public set checked(v) {
    this._checked = v;
  }

  @Input() set value(v: any) {
    this.writeValue(v);
  }

  public onTouched = () => {};

  @HostListener('select-item', ['$event'])
  onSelectItem(e: any) {
    this.onInput(e);
  }

  public writeValue(value: any) {
    this._checked = value;
  }

  public onInput(e: any) {
    e.stopPropagation();
    if (!this.disabled) {
      this._checked = !this._checked;
      this.propagateChange(this._checked);
      this.changeValue.emit({ checked: this._checked, source: this });
      this.onTouched();
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private propagateChange: any = () => {};
}
