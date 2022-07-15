import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {CheckboxComponent} from '../checkbox/checkbox.component';

@Component({
  selector: 'cavelizer-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('prependWrapper', {static: true}) public prependWrapperEl: ElementRef;
  @ViewChild('appendWrapper', {static: true}) public appendWrapperEl: ElementRef;
  @ViewChild('group', {static: true}) public groupDiv: ElementRef;
  @ContentChild(FormControlName, {static: false}) public formControl!: FormControlName; // used by validation errors
  // @ts-ignore
  public focused$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public focused = false;
  @ContentChild(FormControlDirective, {static: false})
  public formControlDirective: FormControlDirective; // used by validation errors
  public control: FormControl = new FormControl();
  @Input() public invalidationForced = false;
  @ContentChild(CheckboxComponent, {static: false}) public simpleSelect: CheckboxComponent;
  public hasCheckbox = false;
  @Output() public onFocus = new EventEmitter();
  @Output() public onBlur = new EventEmitter();

  constructor(private renderer: Renderer2) {
  }

  get isInvalid() {
    return this.control.invalid;
  }

  updateFocused(value: boolean) {
    if (this.focused !== value) {
      this.focused = value;
      this.focused$.next(value);
    }
  }

  @HostListener('input-focused')
  setFocusState() {
    this.updateFocused(true);
    this.onFocus.emit(true);
  }

  @HostListener('input-blurred')
  setBlurredState() {
    this.updateFocused(false);
    this.onBlur.emit(true);
  }

  public ngAfterViewInit(): void {
    if (!!this.appendWrapperEl.nativeElement.children.length) {
      this.renderer.addClass(this.appendWrapperEl.nativeElement, 'input-group-append');
      this.renderer.removeClass(this.appendWrapperEl.nativeElement, 'empty');
    }
  }

  public ngAfterContentInit(): void {
    if (this.formControlDirective) {
      this.control = this.formControlDirective.control;
    } else if (this.formControl) {
      this.control = this.formControl.control;
    }
    this.updateChildren();
  }

  public updateChildren(): void {
    if (this.simpleSelect) {
      this.hasCheckbox = true;
    }
  }

  public onLabelClicked(e: any): void {
    if (this.simpleSelect) {
      this.simpleSelect.onInput(e);
    }
  }
}
