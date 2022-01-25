import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuxModule } from '../gux/gux.module';

import { GuxAvatarDemoComponent } from './avatar/avatar';
import { GuxButtonDemoComponent } from './button/button';

@NgModule({
  declarations: [
    GuxAvatarDemoComponent,
    GuxButtonDemoComponent
  ],
  imports: [
    CommonModule,
    GuxModule
  ]
})
export class DemosModule { }
