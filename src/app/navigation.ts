import { TreeNode } from 'primeng/api';

export const Navigation: TreeNode[] = [
  {
    label: 'Home',
    type: 'navigation',
    data: '/'
  }, {
    label: 'Components',
    type: 'navigation',
    data: 'components/home/cux',
    children: [{
      label: 'Button',
      type: 'navigation',
      data: 'components/GuxButtonComponent'
    }, {
      label: 'Dropdown',
      type: 'navigation',
      data: 'components/GuxDropdownComponent'
    }]
  }, {
    label: 'Services',
    type: 'navigation',
    data: 'services/home/cux',
    children: [{
      label: 'Success Message',
      type: 'navigation',
      data: 'services/SuccessMessageService'
    }]
  }, {
    label: 'Interfaces',
    type: 'navigation',
    data: 'interfaces/home/cux',
    children: [{
      label: 'Button',
      type: 'navigation',
      data: 'interfaces/GuxButtonType'
    }, {
      label: 'Dropdown',
      type: 'navigation',
      data: 'interfaces/GuxDropdownType'
    }, {
      label: 'Dropdown Option',
      type: 'navigation',
      data: 'interfaces/GuxDropdownOptionType'
    }]
  }, {
    label: 'Pipes',
  }, {
    label: 'Directives',
    type: 'navigation',
    data: 'directives/home/cux',
    children: [{
      label: 'Ellipsify',
      type: 'navigation',
      data: 'directives/CuxEllipsifyDirective'
    }, {
      label: 'Input',
      type: 'navigation',
      data: 'directives/CuxInputDirective'
    }, {
      label: 'Tooltip',
      type: 'navigation',
      data: 'directives/CuxTitleTooltipDirective'
    }]
  }, {
    label: 'Miscellaneous',
    type: 'navigation',
    data: 'miscellaneous/home/cux',
    children: [{
      label: 'Variables, Enumerations, etc.',
      type: 'navigation',
      data: 'miscellaneous/cux'
    }]
  }
];
