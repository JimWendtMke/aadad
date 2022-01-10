import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
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
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
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
  constructor(private cocoaDocsService: CocoaDocsService) {
    this.cocoaDocsService.setDemoComponents({
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
