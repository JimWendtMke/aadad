import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { GuxButtonComponent } from './components/gux-button/gux-button.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [
    GuxButtonComponent
  ],
  exports: [
    GuxButtonComponent
  ]
})
export class GuxModule { }
