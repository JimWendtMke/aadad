import {
  Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2, AfterViewInit, ViewEncapsulation,
  forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { GuxDropdownOptionType } from '../../interfaces/gux-dropdown-option.interface';

/**
* Presents variations of the PrimeFaces button component
*/
@Component({
  selector: 'gux-dropdown',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gux-dropdown.component.html',
  styleUrls: ['./gux-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GuxDropdownComponent),
    multi: true
  }]
})
export class GuxDropdownComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  /**
  * Default text to display when no option is selected
  */
  placeholder?: string;
  /**
  * Icon class of the dropdown icon
  */
  dropdownIcon?: string;
  /**
  * When enabled, a clear icon is displayed to clear the value
  */
  showClear?: boolean;
  /**
  * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
  */
  scrollHeight?: string;
  /**
  * Advisory information to display in a tooltip on hover
  */
  tooltip?: string;
  /**
  * Position of the tooltip, valid values are right, left, top and bottom
  */
  tooltipPosition?: string;


  @Input() selectedItem: GuxDropdownOptionType;

  /**
  * Items to be displayed in the dropdown
  */
  @Input() options: GuxDropdownOptionType[];
  /**
  * Name of the label field of an option
  */
  @Input() optionLabel: string = 'label';
  /**
  * Name of the value field of an option
  */
  @Input() optionValue: string= 'value';
  /**
  * Name of the disabled field of an option
  */
  @Input() optionDisabled: string = 'disabled';
  /**
  * Name of the input element
  */
  @Input() name: string = '';
  /**
  * Value of the label to be displayed
  */
  @Input() label: string = '';
  /**
  * Position of the label, valid values are top and left
  */
  @Input() labelPosition: string = 'top';
  /**
  * When present, it specifies that an input field must be filled out before submitting the form
  */
  @Input() required: boolean;
  /**
  * Error information to display if the dropdown is required and none selected
  */
  @Input() requiredError: string = '';
  /**
  * When present, it specifies that the component should be disabled
  */
  @Input() isDisabled: boolean;
  /**
  * Event to emit when the dropdown is clicked
  */
  @Output() onClick = new EventEmitter();
  /**
  * Event to emit when the dropdown changes value
  */
  @Output() onChange = new EventEmitter();
  /**
  * Event to emit when the dropdown is focused
  */
  @Output() onFocus = new EventEmitter();
  /**
  * Event to emit when the dropdown loses focus
  */
  @Output() onBlur = new EventEmitter();
  /**
  * Event to emit when the dropdown is shown
  */
  @Output() onShow = new EventEmitter();
  /**
  * Event to emit when the dropdown is hidden
  */
  @Output() onHide = new EventEmitter();

  viewLoaded = false;

  public onTouched: any = Function.prototype; // Trascent the onTouch event

  @ViewChild('guxDropdownElement', { static: false })
  guxDropdownElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.viewLoaded = true;
  }

  writeValue(val: GuxDropdownOptionType) {
    this.selectedItem = val;
  }

  // registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  // the method set in registerOnChange to emit changes back to the form
  public propagateChange = (_: any) => { };

  click($event) {
    this.onClick.emit($event);
  }

  change($event) {
    this.onChange.emit($event);
  }

  focus($event) {
    this.onFocus.emit($event);
  }

  blur($event) {
    this.onBlur.emit($event);
  }
  show($event) {
    this.onShow.emit($event);
  }

  hide($event) {
    this.onHide.emit($event);
  }

  /* load error message in the component */
  get error() {
    if (this.viewLoaded) {
      if (this.requiredError) {
        this.renderer.addClass(
          this.guxDropdownElement.nativeElement.getElementsByClassName('p-dropdown')[0],
          'p-dropdown-error'
        );
        return this.requiredError;
      } else {
        this.renderer.removeClass(
          this.guxDropdownElement.nativeElement.getElementsByClassName('p-dropdown')[0],
          'p-dropdown-error'
        );
        return '';
      }
    }
    return '';
  }
}
