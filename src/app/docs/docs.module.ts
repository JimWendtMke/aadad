import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { PrimengModule } from '../primeng/primeng.module';
import { GuxModule } from '../gux/gux.module';

import { DocsComponent } from './docs.component';
import { DocsComponentBaseComponent } from './components/component-base/component-base.component';
import { DocsInterfaceBaseComponent } from './components/interface-base/interface-base.component';

import { DocsService } from './services/docs.service';

import { GuxAvatarDemoComponent } from '../demos/avatar/avatar';
import { GuxButtonDemoComponent } from '../demos/button/button';

@NgModule({
  declarations: [
    DocsComponent,
    DocsComponentBaseComponent,
    DocsInterfaceBaseComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    GuxModule,
    ClipboardModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        scss: () => import('highlight.js/lib/languages/scss'),
        json: () => import('highlight.js/lib/languages/json'),
        xml: () => import('highlight.js/lib/languages/xml')
      }
    }
  }]
})
export class DocsModule {
  constructor(
    private router: Router,
    private docsService: DocsService
  ) {
    this.docsService.getDocumentation();
    this.docsService.setDemoComponents({
      GuxButtonComponent: {
        name: 'GuxButtonDemoComponent',
        demo: GuxButtonDemoComponent
      },
      GuxAvatarComponent: {
        name: 'GuxAvatarDemoComponent',
        demo: GuxAvatarDemoComponent
      }
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
 }
