import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import tippy, {Instance, Placement} from 'tippy.js';

@Directive({
  selector: '[caveTooltip]'
})
export class TooltipDirective implements OnDestroy, OnChanges {
  @Input() public caveTooltip: string | TemplateRef<any> | null | undefined;
  @Input() public onlyEllipsisTooltip = false;

  private _isDisabled = false;
  private _tippyInstance: Instance | undefined;
  private _placement: Placement = 'top';

  @Input()
  public set placement(placement: Placement | undefined) {
    if (!placement) {
      placement = 'top';
    }

    this._placement = placement;
  }

  @Input()
  public set isDisabled(disabled: boolean) {
    this._isDisabled = disabled;

    this._handleTooltipState();
  }

  constructor(private _elementRef: ElementRef, private _containerRef: ViewContainerRef) {
  }


  @HostListener('mouseout', ['$event'])
  public onMouseOut(event: MouseEvent): void {
    event.stopPropagation();
    if (this._tippyInstance) {
      this._tippyInstance.unmount();
    }
  }

  @HostListener('mouseover', ['$event'])
  public onMouseOver(event: MouseEvent): void {
    event.stopPropagation();
    if (this._tippyInstance) {
      if (this.onlyEllipsisTooltip) {
        this._checkIfEllipsis();
      }
      this._tippyInstance.show();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('caveTooltip')) {
      if (changes['caveTooltip'].currentValue) {
        let tooltip: string | Element | undefined;
        let tooltipIsEmpty = true;

        if (this.caveTooltip instanceof TemplateRef) {
          const viewRef: EmbeddedViewRef<any> = this._containerRef.createEmbeddedView(this.caveTooltip, {});
          const div: HTMLElement = document.createElement('div');

          viewRef.rootNodes.forEach((node: HTMLElement) => div.append(node));

          tooltip = div;
          tooltipIsEmpty = div.innerHTML.length === 0;

        } else if (typeof this.caveTooltip === 'string') {
          tooltip = this.caveTooltip;
          tooltipIsEmpty = tooltip.length === 0;
        }

        this._initTooltip(<string | Element>tooltip);
        this.isDisabled = tooltipIsEmpty;
      } else {
        this.isDisabled = true;
      }
    }

    if (changes.hasOwnProperty('placement')) {
      if (this._tippyInstance) {
        this._tippyInstance.setProps({
          placement: this._placement as Placement
        })
      }
    }

    if (changes.hasOwnProperty('isDisabled')) {
      this.isDisabled = changes['isDisabled'].currentValue;
    }
  }

  public ngOnDestroy(): void {
    if (this._tippyInstance) {
      this._tippyInstance.destroy();
    }
  }

  public _handleTooltipState(): void {
    if (this._tippyInstance) {
      if (this._isDisabled) {
        this._tippyInstance.disable();
      } else {
        this._tippyInstance.enable();
      }
    }
  }

  private _checkIfEllipsis(): void {
    const curOverflow: string = this._elementRef.nativeElement.style.overflow;

    /* 'hide' overflow to get correct scrollWidth */
    if (!curOverflow || curOverflow === 'visible') {
      this._elementRef.nativeElement.style.overflow = 'hidden';
    }

    /* check is overflowing */
    const isOverflowing = this._elementRef.nativeElement.clientWidth < this._elementRef.nativeElement.scrollWidth;


    /* 'reset' overflow to initial state */
    this._elementRef.nativeElement.style.overflow = curOverflow;
    this.isDisabled = !isOverflowing;
  }

  private _initTooltip(tooltip: any): void {
    if (!this._tippyInstance) {
      this._tippyInstance = tippy(this._elementRef.nativeElement as any, {
        content: tooltip as any,
        trigger: 'manual',
        arrow: true,
        allowHTML: true,
        placement: this._placement,
        followCursor: true,
        duration: 200
      }) as any;
    } else {
      this._tippyInstance.setContent(tooltip as any);
    }
  }
}
