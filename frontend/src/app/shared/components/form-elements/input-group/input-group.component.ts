import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { FormControl, FormControlDirective, FormControlName } from '@angular/forms';
import { BehaviorSubject, filter, Subscription } from 'rxjs';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { InputValidationErrorsComponent } from '../input-validation-errors/input-validation-errors.component';

@Component({
  selector: 'cvz-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  @ViewChild('prependWrapper', { static: true }) public prependWrapperEl: ElementRef;
  @ViewChild('appendWrapper', { static: true }) public appendWrapperEl: ElementRef;
  @ViewChild('group', { static: true }) public groupDiv: ElementRef;
  @ContentChild(FormControlName, { static: false }) public formControl!: FormControlName; // used by validation errors
  // @ts-ignore
  public displayRedLabel$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // @ts-ignore
  public focused$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public focused = false;
  @ContentChild(FormControlDirective, { static: false })
  public formControlDirective: FormControlDirective; // used by validation errors
  @ContentChild(InputValidationErrorsComponent, { static: false })
  public validationErrorsComponent: InputValidationErrorsComponent;
  public control: FormControl = new FormControl();
  @Input() public invalidationForced = false;
  @ContentChild(CheckboxComponent, { static: false }) public simpleSelect: CheckboxComponent;
  public hasCheckbox = false;
  @Output() public onFocus = new EventEmitter();
  @Output() public onBlur = new EventEmitter();
  private subscription: Subscription = new Subscription();

  constructor(private renderer: Renderer2) {}

  get isInvalid() {
    return this.control.invalid;
  }

  updateRedLabel(valid: boolean, force = false) {
    setTimeout(() => {
      if (force) {
        this.displayRedLabel$.next(valid);
        return;
      }
      if (this.control.touched) {
        if (this.focused) {
          this.displayRedLabel$.next(false);
        } else {
          this.displayRedLabel$.next(valid);
        }
      }
    });
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

    if (this.control) {
      if (this.validationErrorsComponent) {
        this.validationErrorsComponent.control = this.control;
        this.validationErrorsComponent.showErrors = this.displayRedLabel$.pipe(
          filter(() => !this.control.pending && this.control.invalid && (this.control.touched || this.control.dirty))
        );
        this.focused$.subscribe(isFocused => {
          if (!isFocused) {
            if (this.control.status !== 'VALID') {
              this.updateRedLabel(true);
            }
          }
          this.validationErrorsComponent.isFocused = isFocused;
        });
      }

      this.subscription.add(
        this.control.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.updateRedLabel(false, true);
          }
          if (status === 'INVALID') {
            this.updateRedLabel(true, this.invalidationForced);
          }
        })
      );
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

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
