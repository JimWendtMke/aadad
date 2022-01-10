import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  providers: [ MessageService ]
})
export class DocsComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.handleMessage('yo');
  }

  handleMessage(messagePacket) {
    this.messageService.add({
      key: 'banner',
      severity: 'info',
      summary: 'Message Bus Event',
      detail: 'packet data details'
    });
  }

}
