import { DropdownOptionType } from "src/app/docs/interfaces/dropdown-option.interface";
import { GuxTabViewType } from "src/app/gux/interfaces/gux-tabview-interface";

/**
* @ignore
*/
export interface ExampleInterface extends Array<GuxTabViewType[]> { };

/**
* @ignore
*/
export const DropdownItems: DropdownOptionType[] = [{
  label: 'Default',
  value: 0
}, {
  label: 'Large',
  value: 1
}];

/**
* @ignore
*/

export const Examples: ExampleInterface = [
  [{
    activeIndex: 0,
    controlClose: true,
    scrollable: true,
    tabs: [{
      header: 'Header',
      content: {
        isHTML: true,
        content: '<h1>HELLO</h1'
      }
    }]
  }]
];

/**
  header?: string
  content: any
  isDisabled?: boolean;
  isClosable?: boolean;
  cache?: boolean;
  tooltip?: string;
  tooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
*/
