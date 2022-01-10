import { TreeNode } from 'primeng/api';

export const Navigation: TreeNode[] = [
  {
    label: 'Home',
    type: 'navigation',
    data: '/'
  }, {
    label: 'AADAD Gux',
    children: [
      {
        label: 'Components',
        type: 'navigation',
        data: 'components/home/cux',
        children: [
          {
            label: 'Badge',
            type: 'navigation',
            data: 'components/CuxBadgeComponent'
          },
          {
            label: 'Banner',
            type: 'navigation',
            data: 'components/CuxBannerComponent'
          },
          {
            label: 'Button',
            type: 'navigation',
            data: 'components/CuxButtonComponent'
          },
          {
            label: 'Checkbox',
            type: 'navigation',
            data: 'components/CuxCheckboxComponent'
          },
          {
            label: 'Dropdown',
            type: 'navigation',
            data: 'components/CuxDropdownComponent'
          },
        ],
      },
      {
        label: 'Services',
        type: 'navigation',
        data: 'services/home/cux',
        children: [
          {
            label: 'Success Message',
            type: 'navigation',
            data: 'services/SuccessMessageService'
          },
        ],
      },
      {
        label: 'Interfaces',
        type: 'navigation',
        data: 'interfaces/home/cux',
        children: [
          {
            label: 'Accordion Item',
            type: 'navigation',
            data: 'interfaces/AccordionItem'
          },
          {
            label: 'Accordion Items',
            type: 'navigation',
            data: 'interfaces/AccordionItems'
          },
          {
            label: 'Accordion Title',
            type: 'navigation',
            data: 'interfaces/AccordionTitle'
          },
          {
            label: 'Badge',
            type: 'navigation',
            data: 'interfaces/CuxBadgeModel'
          },
          {
            label: 'Breadcrumb',
            type: 'navigation',
            data: 'interfaces/Breadcrumb'
          },
          {
            label: 'Button',
            type: 'navigation',
            data: 'interfaces/Button'
          },
          {
            label: '360 Summary Card',
            type: 'navigation',
            data: 'interfaces/CuxCard360SummaryCard'
          },
          {
            label: 'Check Box',
            type: 'navigation',
            data: 'interfaces/CheckBoxItem'
          },
          {
            label: 'Dropdown Item',
            type: 'navigation',
            data: 'interfaces/CuxDropdownItem'
          },
          {
            label: 'Dropdown Item Value',
            type: 'navigation',
            data: 'interfaces/CuxDropDownItemValue'
          },
          {
            label: 'Footer Button',
            type: 'navigation',
            data: 'interfaces/FooterButton',
          },
          {
            label: 'Radio Button',
            type: 'navigation',
            data: 'interfaces/RadioButtonItem',
          },
          {
            label: 'Selection Change',
            type: 'navigation',
            data: 'interfaces/SelectionChange'
          },
          {
            label: 'Sidebar Data',
            type: 'navigation',
            data: 'interfaces/SideBarData'
          },
          {
            label: 'Stepper Item',
            type: 'navigation',
            data: 'interfaces/StepperItem'
          }
        ]
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
    ]
  }
];
