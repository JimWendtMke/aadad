import { GuxButtonType } from 'src/app/gux/interfaces/gux-button.interface';

/**
* @ignore
*/
export interface ExampleInterface extends Array<GuxButtonType[]> { };

/**
* @ignore
*/
export interface DropdownOption {
  label: string,
  value: number
}

/**
* @ignore
*/
export const DropdownItems: DropdownOption[] = [{
  label: 'Default',
  value: 0
}, {
  label: 'Large',
  value: 1
}, {
  label: 'Small',
  value: 2
}, {
  label: 'Rounded Default',
  value: 3
}, {
  label: 'Default with Icons',
  value: 4
}, {
  label: 'Default Raised',
  value: 5
}, {
  label: 'Default Outlined',
  value: 6
}, {
  label: 'Text Only',
  value: 7
}, {
  label: 'Raised Text Only',
  value: 8
}, {
  label: 'Icon Only',
  value: 9
}, {
  label: 'Icon Text',
  value: 10
}, {
  label: 'Icon Text Outlined',
  value: 11
}];

/**
* @ignore
*/
export const Examples: ExampleInterface = [
  [{
    label: 'Button 1',
    tooltip: 'Primary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    tooltip: 'Secondary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    tooltip: 'Success',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    tooltip: 'Info',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    tooltip: 'Warning',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    tooltip: 'Help',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    tooltip: 'Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    buttonSize: 'lg',
    tooltip: 'Large Primary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    buttonSize: 'lg',
    tooltip: 'Large Secondary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    buttonSize: 'lg',
    tooltip: 'Large Success',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    buttonSize: 'lg',
    tooltip: 'Large Info',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    buttonSize: 'lg',
    tooltip: 'Large Warning',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    buttonSize: 'lg',
    tooltip: 'Large Help',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    buttonSize: 'lg',
    tooltip: 'Large Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    buttonSize: 'sm',
    tooltip: 'Small Primary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    buttonSize: 'sm',
    tooltip: 'Small Secondary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    buttonSize: 'sm',
    tooltip: 'Small Success',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    buttonSize: 'sm',
    tooltip: 'Small Info',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    buttonSize: 'sm',
    tooltip: 'Small Warning',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    buttonSize: 'sm',
    tooltip: 'Small Help',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    buttonSize: 'sm',
    tooltip: 'Small Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    tooltip: 'Rounded Primary',
    isRounded: true,
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    isRounded: true,
    tooltip: 'Rounded Secondary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    isRounded: true,
    tooltip: 'Rounded Success',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    isRounded: true,
    tooltip: 'Rounded Info',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    isRounded: true,
    tooltip: 'Rounded Warning',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    isRounded: true,
    tooltip: 'Rounded Help',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    isRounded: true,
    tooltip: 'Rounded Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    icon: 'user',
    iconPosition: 'left',
    tooltip: 'Primary with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    icon: 'users',
    iconPosition: 'right',
    tooltip: 'Secondary with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    icon: 'thumbs-up',
    iconPosition: 'left',
    tooltip: 'Success with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    icon: 'info-circle',
    iconPosition: 'right',
    tooltip: 'Info with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    icon: 'exclamation-triangle',
    iconPosition: 'left',
    tooltip: 'Warning with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    icon: 'question-circle',
    iconPosition: 'right',
    tooltip: 'Help with Icon',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    icon: 'stop-circle',
    iconPosition: 'left',
    tooltip: 'Danger with Icon',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    tooltip: 'Raised Primary',
    isRaised: true,
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    isRaised: true,
    tooltip: 'Raised Secondary',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    isRaised: true,
    tooltip: 'Raised Success',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    isRaised: true,
    tooltip: 'Raised Info',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    isRaised: true,
    tooltip: 'Raised Warning',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    isRaised: true,
    tooltip: 'Raised Help',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    isRaised: true,
    tooltip: 'Raised Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    tooltip: 'Primary Outlined',
    isOutlined: true,
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    isOutlined: true,
    tooltip: 'Secondary Outlined',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    isOutlined: true,
    tooltip: 'Success Outlined',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    isOutlined: true,
    tooltip: 'Info Outlined',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    isOutlined: true,
    tooltip: 'Warning Outlined',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    isOutlined: true,
    tooltip: 'Help Outlined',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    isOutlined: true,
    tooltip: 'Danger Outlined',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    isTextOnly: true,
    tooltip: 'Primary Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    isTextOnly: true,
    tooltip: 'Secondary Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    isTextOnly: true,
    tooltip: 'Success Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    isTextOnly: true,
    tooltip: 'Info Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    isTextOnly: true,
    tooltip: 'Warning Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    isTextOnly: true,
    tooltip: 'Help Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    isTextOnly: true,
    tooltip: 'Danger Text',
    tooltipPosition: 'bottom'
  }],
  [{
    label: 'Button 1',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Primary Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 2',
    buttonMode: 'secondary',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Secondary Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 3',
    buttonMode: 'success',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Success Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 4',
    buttonMode: 'info',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Info Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 5',
    buttonMode: 'warning',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Warning Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 6',
    buttonMode: 'help',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Help Text',
    tooltipPosition: 'bottom'
  }, {
    label: 'Button 7',
    buttonMode: 'danger',
    isTextOnly: true,
    isRaised: true,
    tooltip: 'Raised Danger Text',
    tooltipPosition: 'bottom'
  }],
  [{
    tooltip: 'Rounded Primary',
    icon: 'user',
    isRounded: true,
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'secondary',
    icon: 'users',
    isRounded: true,
    tooltip: 'Rounded Secondary',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'success',
    icon: 'thumbs-up',
    isRounded: true,
    tooltip: 'Rounded Success',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'info',
    icon: 'info-circle',
    isRounded: true,
    tooltip: 'Rounded Info',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'warning',
    icon: 'exclamation-triangle',
    isRounded: true,
    tooltip: 'Rounded Warning',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'help',
    icon: 'question-circle',
    isRounded: true,
    tooltip: 'Rounded Help',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'danger',
    icon: 'stop-circle',
    isRounded: true,
    tooltip: 'Rounded Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    tooltip: 'Rounded Primary',
    icon: 'user',
    isRounded: true,
    isTextOnly: true,
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'secondary',
    icon: 'users',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Secondary',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'success',
    icon: 'thumbs-up',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Success',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'info',
    icon: 'info-circle',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Info',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'warning',
    icon: 'exclamation-triangle',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Warning',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'help',
    icon: 'question-circle',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Help',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'danger',
    icon: 'stop-circle',
    isRounded: true,
    isTextOnly: true,
    tooltip: 'Rounded Danger',
    tooltipPosition: 'bottom'
  }],
  [{
    tooltip: 'Rounded Primary',
    icon: 'user',
    isRounded: true,
    isOutlined: true,
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'secondary',
    icon: 'users',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Secondary',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'success',
    icon: 'thumbs-up',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Success',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'info',
    icon: 'info-circle',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Info',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'warning',
    icon: 'exclamation-triangle',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Warning',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'help',
    icon: 'question-circle',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Help',
    tooltipPosition: 'bottom'
  }, {
    buttonMode: 'danger',
    icon: 'stop-circle',
    isRounded: true,
    isOutlined: true,
    tooltip: 'Rounded Danger',
    tooltipPosition: 'bottom'
  }]
];

/**
    label: 'Button 7',
    buttonMode: 'danger',
    buttonSize: '',
    icon: '',
    iconPosition: '',
    tooltip: 'Danger',
    tooltipPosition: 'bottom',
    isDisabled: false,
    isTextOnly: false,
    isRaised: false,
    isOutlined: false,
    isRounded: false
 */
