import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

import { GlobalMessageService } from 'src/app/services/global-message.service';
import { GlobalMessageType } from 'src/app/interfaces/global-message-type';

import { GuxTabViewType } from 'src/app/gux/interfaces/gux-tabview-interface';
import { DropdownItems, Examples } from './tabs.data';

@Component({
  selector: 'tabs-demo',
  templateUrl: './tabs.html',
  styleUrls: ['../../docs/assets/styles/base-styles.scss']
})
export class GuxTabsDemoComponent implements OnInit {

  dropdownItems = DropdownItems;
  examples = Examples;

  example: GuxTabViewType[];
    
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit() {
    this.example = this.examples[0];
    
    if (!this.cardData.body.isHTML) {
      let contentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardData.body.content);
      cardComponent.instance['componentData'] = this.cardData.body.componentData;
    }
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
      life: 2000,
      sticky: false,
      closable: false
    }
    this.globalMessageService.sendMessage(messagePacket);
  }

}

