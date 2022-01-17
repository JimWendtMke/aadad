import { TreeNode } from 'primeng/api';

export const Navigation: TreeNode[] = [{
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
}];
