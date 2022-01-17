import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { TreeNode } from 'primeng/api';
import { MessageService as PrimeMessageService } from 'primeng/api';

import { GlobalMessageService } from './services/global-message.service';
import { GlobalMessageType } from './interfaces/global-message-type';

import { Navigation } from './navigation';


interface City {
  name: string,
  code: string,
  disabled?: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ GlobalMessageService, PrimeMessageService ]
})

export class AppComponent implements OnDestroy {
  title = 'developer';
  navigation: any;
  messages: any = [];
  subscription: Subscription;


  cities: City[];
  selectedCity: City;


  sourceCode: string = "";

  constructor(
    private router: Router,
    public primeMessageService: PrimeMessageService,
    private globalMessageService: GlobalMessageService
  ) {
    this.selectedCity = {
      name: '',
      code: ''
    }
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome, Italy', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];


    this.navigation = Navigation;
    this.subscription = this.globalMessageService.getMessage().subscribe((message: GlobalMessageType) => {
      this.messages.push(message);
      this.primeMessageService.add(message);
    });
  }

  nodeSelect(event) {
    if (event.node.type === 'navigation' && event.node.data) {
      this.router.navigateByUrl(event.node.data);
    }
  }

  expandAll(){
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

