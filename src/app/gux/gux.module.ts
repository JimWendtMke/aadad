import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from 'primeng/tree';

import { GuxButtonComponent } from './components/gux-button/gux-button.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    TooltipModule,
    TreeModule
  ],
  declarations: [
    GuxButtonComponent
  ],
  exports: [
    GuxButtonComponent
  ]
})
export class GuxModule { }
