import { Component, OnInit } from '@angular/core';

import { GlobalMessageService } from 'src/app/services/global-message.service';
import { GlobalMessageType } from 'src/app/interfaces/global-message-type';

import { GuxButtonType } from 'src/app/gux/interfaces/gux-button.interface';
import { DropdownItems, Examples } from './button.data';

@Component({
  selector: 'button-demo',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class GuxButtonDemoComponent implements OnInit {

  /**
  * Setup examples data (REQUIRED TO MODIFY DEMO DATA IF MULTIPLE DEMOS ARE DISPLAYED)
  */
  dropdownItems = DropdownItems;
  examples = Examples;
   
  /**
  * Setup demo (REQUIRED)
  */
  example: GuxButtonType[];
    
  public btnClickedMsg: string = 'Click a button';

  constructor(
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit() {
    this.example = this.examples[0];
  }

  /**
  * This method displays handling the button click event both as an event
  * and by sending the data to the Global Message Service
  */
  public btnClicked = ($event, btnLabel) => {
    const msg = 'Clicked ' + btnLabel + ' button';
    this.btnClickedMsg = msg;
    const messagePacket: GlobalMessageType = {
      severity: 'warn',
      summary: 'This is the message summary',
      detail: 'This is the message detail',
      id: 0,
      key: 'gux-banner',
      life: 30,
      sticky: true,
      closable: true,
      data: {
        field1: '1',
        field2: '2'
      },
      icon: 'warning',
      contentStyleClass: '',
      styleClass: ''
    }
    this.globalMessageService.sendMessage(messagePacket);
  }

}
