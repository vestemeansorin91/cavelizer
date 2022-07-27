import {Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CAVELIZER_TEXT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};

@Component({
  selector: 'cavelizer-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [CAVELIZER_TEXT_INPUT_VALUE_ACCESSOR]
})
export class TextInputComponent implements ControlValueAccessor {
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() public mask = null;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public type = 'text';
  @Output() public onEnterKey: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onEscKey: EventEmitter<any> = new EventEmitter<any>();
  @Output() public blur: EventEmitter<any> = new EventEmitter<any>();

  @Input() set value(v: any) {
    this.writeValue(v);
  }

  public _placeholder = '';

  @Input() set placeholder(value: any) {
    this._placeholder = value === null ? '' : value;
  }

  // private lastMaskedValue = '';
  public onTouched = () => {
  };

  public onEnter(e: any) {
    this.onEnterKey.emit(e);
  }

  public onEscape(e: any) {
    this.onEscKey.emit(e);
  }

  public onBlur(e: any) {
    this.onTouched();
    this.blur.emit(e);
  }

  public writeValue(value: any) {
    value = this.parseValueWithMask(value);
    this.input.nativeElement.value = value;
  }

  public parseValueWithMask(value: any) {
    return value;
  }

  public onInput(ev: any) {
    if (!this.disabled) {
      let value = this.input.nativeElement.value;
      value = this.parseValueWithMask(value);
      this.propagateChange(value);
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

  private propagateChange: any = () => {
  };

}
