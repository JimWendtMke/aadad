import { GuxTabPanelType } from "./gux-tabpanel-interface";

export interface GuxTabViewType {
  /**
  * Items to be displayed in the tab view
  */
  tabs: GuxTabPanelType[];
  /**
  * Index of the active tab to change selected tab programmatically
  */
  activeIndex?: number;
  /**
  * Whether tab close is controlled at onClose event or not
  */
  controlClose?: boolean;
  /**
  * When enabled displays buttons at each side of the tab headers to scroll the tab list
  */
  scrollable: boolean;
}
