import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Navigation } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ MessageService ]
})

export class AppComponent implements OnInit {
  title = 'developer';
  navigation: any;
  messages: any = [];

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    this.navigation = Navigation;
  }

  ngOnInit() {
    this.messageService.messageObserver.subscribe((message: any) => {
      if (message.key === 'banner') {
        this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
      } else if (message.key === 'toast') {
      }
    });
  }

  nodeSelect(event) {
    if (event.node.type === 'navigation' && event.node.data) {
      this.router.navigateByUrl(event.node.data);
    }
  }

  expandAll(){
    this.messageService.clear();
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.navigation.forEach(node => {
      this.recursiveToggle(node, true);
    });
  }

  collapseAll(){
    this.navigation.forEach( node => {
      this.recursiveToggle(node, false);
    });
  }

  recursiveToggle(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach( childNode => {
        this.recursiveToggle(childNode, isExpand);
      });
    }
  }



  show() {
    this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

clear() {
    this.messages = [];
}

}

