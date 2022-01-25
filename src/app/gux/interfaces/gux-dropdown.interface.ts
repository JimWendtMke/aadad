import { GuxDropdownOptionType } from './gux-dropdown-option.interface';

export interface GuxDropdownType {
  /**
  * Items to be displayed in the dropdown
  */
  options: GuxDropdownOptionType[];
  /**
  * Name of the label field of an option
  */
  optionLabel?: string;
  /**
  * Name of the value field of an option
  */
  optionValue?: string;
  /**
  * Name of the disabled field of an option
  */
  optionDisabled?: string;
  /**
  * Name of the input element
  */
  name?: string;
  /**
  * Value of the label to be displayed
  */
  label?: string;
  /**
  * Position of the label, valid values are top, left and float
  */
  labelPosition?: 'top' | 'left' | 'float';
  /**
  * When present, it specifies that an input field must be filled out before submitting the form
  */
  required?: boolean;
  /**
  * Error information to display if the dropdown is required and none selected
  */
  requiredError?: string;
  /**
  * When present, it specifies that the component should be disabled
  */
  isDisabled?: boolean;
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
  tooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
}
