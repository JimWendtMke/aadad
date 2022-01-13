import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from 'primeng/tree';

import { DemosModule } from './demos/demos.module';
import { DocsModule } from './docs/docs.module';
import { GuxModule } from './gux/gux.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BadgeModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    TooltipModule,
    TreeModule,
    AppRoutingModule,
    DemosModule,
    DocsModule,
    GuxModule
  ],
  exports: [ ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  /**
  constructor(private docsService: docsService) {
    this.docsService.setDemoComponents({
      GuxBadgeComponent: {
        name: 'GuxBadgeDemoComponent',
        demo: GuxBadgeDemoComponent
      },
      GuxBannerComponent: {
        name: 'GuxBannerDemoComponent',
        demo: GuxBannerDemoComponent
      },
      GuxButtonComponent: {
        name: 'GuxButtonDemoComponent',
        demo: GuxButtonDemoComponent
      },
      GuxCheckboxComponent: {
        name: 'GuxCheckboxDemoComponent',
        demo: GuxCheckboxDemoComponent
      },
      GuxInputDirective: {
        name: 'GuxInputDemoComponent',
        demo: GuxInputDemoComponent
      }
    });
  }
  */
}
