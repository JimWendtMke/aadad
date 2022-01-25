import { Component, OnInit } from '@angular/core';

import { GuxAvatarType } from 'src/app/gux/interfaces/gux-avatar.interface';
import { DropdownItems, Examples } from './avatar.data';

@Component({
  selector: 'avatar-demo',
  templateUrl: './avatar.html',
  styleUrls: ['../../docs/assets/styles/base-styles.scss']
})
export class GuxAvatarDemoComponent implements OnInit {

  dropdownItems = DropdownItems;
  examples = Examples;

  example: GuxAvatarType[];
    
  constructor() { }

  ngOnInit() {
    this.example = this.examples[0];
  }

}
