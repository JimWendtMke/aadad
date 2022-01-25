import { GuxTabPanelContentType } from "./gux-tabpanel-content.interface";

export interface GuxTabPanelType {
  /**
  * Title of the tabPanel
  */
  header: string;
  /**
  * When present, it specifies the icon to be displayed left of the header
  */
  leftIcon?: string;
  /**
  * When present, it specifies the icon to be displayed left of the header
  */
  rightIcon?: string;
  /**
  * Title of the tabPanel
  */
  content: GuxTabPanelContentType;
  /**
  * Defines if tab is active
  */
  isSelected?: boolean;
  /**
  * When present and true, tab cannot be activated
  */
  isDisabled?: boolean;
  /**
  * When present and true, tab can be removed
  */
  isClosable?: boolean;
  /**
  * Whether a lazy loaded panel should avoid getting loaded again on reselection
  */
  cache?: boolean;
  /**
  * Advisory information to display in a tooltip on hover
  */
  tooltip?: string;
  /**
  * Position of the tooltip, valid values are right, left, top and bottom
  */
  tooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
}
