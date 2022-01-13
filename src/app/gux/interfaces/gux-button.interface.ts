export interface GuxButtonType {
  /**
  * Type of the button
  */
  type?: '' | 'button' | 'submit' | 'reset';
  /**
  * When present, it specifies the text of the button
  */
  label?: string;
  /**
  * Style of the button color
  */
  buttonMode?: '' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';
  /**
  * Size of the button
  */
  buttonSize?: '' | 'sm' | 'lg';
  /**
  * When present, it specifies the icon to be displayed in the button
  */
  icon?: string;
  /**
  * Position of the icon displayed in the button
  */
  iconPosition?: '' | 'left' | 'right';
  /**
  * When present, it specifies the tooltip text for the button
  */
  tooltip?: string;
  /**
  * Position of the tooltip displayed for the button
  */
  tooltipPosition?: '' | 'top' | 'left' | 'bottom' | 'right';
  /**
  * When present and true, it specifies that the button should be disabled
  */
  isDisabled?: boolean;
  /**
  * When present and true, it specifies that the button should be raised
  */
  isRaised?: boolean;
  /**
  * When present and true, it specifies that the button should be rounded
  */
  isRounded?: boolean;
  /**
  * When present and true, it specifies that the button should be outlined
  */
  isOutlined?: boolean;
  /**
  * When present, it specifies that the inline style to apply to the button
  */
  inlineStyle?: string;
  /**
  * Callback to execute when button is clicked
  */
  (clicked?: string): void;
  /**
  * Callback to execute when button is focused
  */
  (focused?: string): void;
  /**
  * Callback to execute when button loses focus
  */
  (blurred?: string): void;
}
