import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuxModule } from '../gux/gux.module';

import { GuxButtonDemoComponent } from './button/button'

@NgModule({
  declarations: [
    GuxButtonDemoComponent
  ],
  imports: [
    CommonModule,
    GuxModule
  ]
})
export class DemosModule { }
