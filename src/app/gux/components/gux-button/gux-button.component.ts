import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GuxButtonType } from '../../interfaces/gux-button.interface';

@Component({
  selector: 'gux-button',
  templateUrl: './gux-button.component.html',
  styleUrls: ['./gux-button.component.scss'],
})
export class GuxButtonComponent implements OnInit {
  /**
  * Type of the button
  */
  @Input() type: GuxButtonType['type'] = 'button';
  /**
  * When present, it specifies the text of the button
  */
  @Input() label: GuxButtonType['label'] = '';
  /**
  * Style of the button color
  */
  @Input() buttonMode: GuxButtonType['buttonMode'] = 'primary';
  /**
  * Size of the button
  */
  @Input() buttonSize: GuxButtonType['buttonSize'] = '';
  /**
  * When present, it specifies the icon to be displayed in the button
  */
  @Input() icon: GuxButtonType['icon'] = '';
  /**
  * Position of the icon displayed in the button
  */
  @Input() iconPosition: GuxButtonType['iconPosition'] = '';
  /**
  * When present, it specifies the tooltip text for the button
  */
  @Input() tooltip: GuxButtonType['tooltip'] = '';
  /**
  * Position of the tooltip displayed for the button
  */
  @Input() tooltipPosition: GuxButtonType['tooltipPosition'] = '';
  /**
  * When present, it specifies that the button should be disabled
  */
  @Input() isDisabled: GuxButtonType['isDisabled'] = false;
  /**
  * When present, it specifies that the button should be raised
  */
  @Input() isRaised: GuxButtonType['isRaised'] = false;
  /**
  * When present, it specifies that the button should be rounded
  */
  @Input() isRounded: GuxButtonType['isRounded'] = false;
  /**
  * When present, it specifies that the button should be outlined
  */
  @Input() isOutlined: GuxButtonType['isOutlined'] = false;
  /**
  * When present, it specifies that the inline style to apply to the button
  */
  @Input() inlineStyle: GuxButtonType['inlineStyle'] = '';

  @Output() onClick = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  buttonClass: string = 'p-button ';

  constructor() {}

  ngOnInit() {
    this.buildButtonConfig();
  }

  buildButtonConfig() {
    if (this.buttonSize) {
      this.buttonClass = 'p-button-' + this.buttonSize + ' ';    
    }
    if (this.buttonMode) {
      this.buttonClass += 'p-button-' + this.buttonMode + ' ';
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

  public onBtnClick = ($event) => {
    console.log('Clicked');
    this.onClick.emit({ event: $event });
  }

  public onBtnFocus = ($event) => {
    console.log('Focused');
    this.onFocus.emit({ event: $event });
  }

  public onBtnBlur = ($event) => {
    console.log('Blurred');
    this.onBlur.emit({ event: $event });
  }

}
