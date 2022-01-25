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
    label: 'Avatar',
    type: 'navigation',
    data: 'components/GuxAvatarComponent'
  }, {
    label: 'Button',
    type: 'navigation',
    data: 'components/GuxButtonComponent'
  }, {
    label: 'Dropdown',
    type: 'navigation',
    data: 'components/GuxDropdownComponent'
  }, {
    label: 'Table (Simple)',
    type: 'navigation',
    data: 'components/GuxTableComponent'
  }]
}, {
  label: 'Interfaces',
  type: 'navigation',
  data: 'interfaces/home/cux',
  children: [{
    label: 'Avatar',
    type: 'navigation',
    data: 'interfaces/GuxAvatarType'
  }, {
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
  }, {
    label: 'Table',
    type: 'navigation',
    data: 'interfaces/GuxTableType'
  }, {
    label: 'Table Column',
    type: 'navigation',
    data: 'interfaces/GuxTableColumnType'
  }]
}];
