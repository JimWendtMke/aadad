import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
* Presents variations of the PrimeFaces button component
*/
@Component({
  selector: 'gux-button',
  templateUrl: './gux-button.component.html',
  styleUrls: ['./gux-button.component.scss'],
})
export class GuxButtonComponent implements OnInit {
  /**
  * Type of the button
  */
  @Input() type: string = 'button';
  /**
  * When present, it specifies the text of the button
  */
  @Input() label: string = '';
  /**
  * Style of the button color
  */
  @Input() buttonMode: string = 'primary';
  /**
  * Size of the button
  */
  @Input() buttonSize: string = '';
  /**
  * When present, it specifies the icon to be displayed in the button
  */
  @Input() icon: string = '';
  /**
  * Position of the icon displayed in the button
  */
  @Input() iconPosition: string = '';
  /**
  * When present, it specifies the tooltip text for the button
  */
  @Input() tooltip: string = '';
  /**
  * Position of the tooltip displayed for the button
  */
  @Input() tooltipPosition: string = '';
  /**
  * When present, it specifies that the button should be disabled
  */
  @Input() isDisabled: boolean = false;
  /**
  * When present and true, it specifies that the button should be text only
  */
  @Input() isTextOnly: boolean = false;
  /**
  * When present, it specifies that the button should be raised
  */
  @Input() isRaised: boolean = false;
  /**
  * When present, it specifies that the button should be rounded
  */
  @Input() isRounded: boolean = false;
  /**
  * When present, it specifies that the button should be outlined
  */
  @Input() isOutlined: boolean = false;
  /**
  * When present, it specifies that the inline style to apply to the button
  */
  @Input() inlineStyle: string = '';
  /**
  * Event to emit when the button is clicked
  */
  @Output() onClick = new EventEmitter();
  /**
  * Event to emit when the button is focused
  */
  @Output() onFocus = new EventEmitter();
  /**
  * Event to emit when the button loses focus
  */
  @Output() onBlur = new EventEmitter();

  /**
  * Contains the button class string
  */
  buttonClass: string = 'p-button ';

  constructor() {}

  ngOnInit() {
    this.buildButtonConfig();
  }

  /**
  * Builds the logic to create the button class string
  */
  buildButtonConfig() {
    if (this.buttonSize) {
      this.buttonClass = 'p-button-' + this.buttonSize + ' ';    
    }
    if (this.buttonMode) {
      this.buttonClass += 'p-button-' + this.buttonMode + ' ';
    }
    if (this.isTextOnly) {
      this.buttonClass += 'p-button-text ';
    }
    if (!!this.isRaised) {
      this.buttonClass += 'p-button-raised ';
    }
    if (!!this.isRounded) {
      this.buttonClass += 'p-button-rounded ';
    }
    if (!!this.isOutlined) {
      this.buttonClass += 'p-button-outlined ';
    }
  }

  /**
  * Handles the button click and emits the onClick event
  */
  public onBtnClick = ($event) => {
    this.onClick.emit({ event: $event });
  }

  /**
  * Handles the button focus and emits the onFocus event
  */
  public onBtnFocus = ($event) => {
    this.onFocus.emit({ event: $event });
  }

  /**
  * Handles the button blur and emits the onBlur event
  */
  public onBtnBlur = ($event) => {
    this.onBlur.emit({ event: $event });
  }

}
