import { DropdownOptionType } from "src/app/docs/interfaces/dropdown-option.interface";
import { GuxAvatarType } from 'src/app/gux/interfaces/gux-avatar.interface';

/**
* @ignore
*/
export interface ExampleInterface extends Array<GuxAvatarType[]> { };

/**
* @ignore
*/
export const DropdownItems: DropdownOptionType[] = [{
  label: 'Text - Square',
  value: 0
}, {
  label: 'Text - Circle',
  value: 1
}, {
  label: 'Icon - Square',
  value: 2
}, {
  label: 'Icon - Circle',
  value: 3
}, {
  label: 'Image - Square',
  value: 4
}, {
  label: 'Image - Circle',
  value: 5
}, {
  label: 'Modes',
  value: 6
}];

/**
* @ignore
*/
export const Examples: ExampleInterface = [
  [{
    shape: 'square',
    label: 'J',
    size: 'xlarge'
  }, {
    shape: 'square',
    label: 'J',
    size: 'large'
  }, {
    shape: 'square',
    label: 'J'
  }],
  [{
    shape: 'circle',
    label: 'J',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    size: 'large'
  }, {
    shape: 'circle',
    label: 'J'
  }],
  [{
    shape: 'square',
    icon: 'user',
    size: 'xlarge'
  }, {
    shape: 'square',
    icon: 'user',
    size: 'large'
  }, {
    shape: 'square',
    icon: 'user'
  }],
  [{
    shape: 'circle',
    icon: 'user',
    size: 'xlarge'
  }, {
    shape: 'circle',
    icon: 'user',
    size: 'large'
  }, {
    shape: 'circle',
    icon: 'user'
  }],
  [{
    shape: 'square',
    image: 'assets/images/jim.jpeg',
    size: 'xlarge'
  }, {
    shape: 'square',
    image: 'assets/images/jim.jpeg',
    size: 'large'
  }, {
    shape: 'square',
    image: 'assets/images/jim.jpeg',
  }],
  [{
    shape: 'circle',
    image: 'assets/images/jim.jpeg',
    size: 'xlarge'
  }, {
    shape: 'circle',
    image: 'assets/images/jim.jpeg',
    size: 'large'
  }, {
    shape: 'circle',
    image: 'assets/images/jim.jpeg'
  }],
  [{
    shape: 'circle',
    label: 'J',
    mode: 'primary',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'secondary',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'success',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'info',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'warning',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'help',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'danger',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'light',
    size: 'xlarge'
  }, {
    shape: 'circle',
    label: 'J',
    mode: 'dark',
    size: 'xlarge'
  }]
];
