import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimengModule } from './primeng/primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppRoutingModule,

    PrimengModule,

    DemosModule,
    DocsModule,
    GuxModule
  ],
  exports: [ PrimengModule ],
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
