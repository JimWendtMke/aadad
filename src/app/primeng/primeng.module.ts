import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule, Table } from 'primeng/table';
import { TabViewModule, TabView, TabPanel } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    AccordionModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    TableModule,
    TabViewModule,
    ToastModule,
    TooltipModule,
    TreeModule
  ],
  
  exports: [
    AccordionModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    TableModule,
    TabViewModule,
    ToastModule,
    TooltipModule,
    TreeModule
  ]
})
export class PrimengModule { }
