import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

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

  dropdownItems = DropdownItems;
  examples = Examples;

  example: GuxButtonType[];
    
  constructor(
    private messageService: MessageService,
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit() {
    this.example = this.examples[0];
  }

  public btnClicked = ($event, btnLabel, btnIcon) => {
    let detail: string = 'Unknown value';
    if (btnLabel) {
      detail = 'Clicked on button with label: ' + btnLabel;
    } else if (btnIcon) {
      detail = 'Clicked on button with icon: ' + btnIcon;
    }
    const messagePacket: GlobalMessageType = {
      severity: 'success',
      summary: 'Global Message Bus Delivery',
      detail: detail,
      key: 'gux-toast',
      life: 30,
      sticky: true,
      closable: false
    }
    this.globalMessageService.sendMessage(messagePacket);

    setTimeout(() => {
      this.messageService.clear();
    }, 1500);

  }

}
