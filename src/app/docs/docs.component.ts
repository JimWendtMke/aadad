import { Component, OnInit } from '@angular/core';

import { GlobalMessageService } from '../services/global-message.service';
import { GlobalMessageType } from '../interfaces/global-message-type';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor(
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(): void  {
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
