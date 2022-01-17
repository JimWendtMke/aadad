import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';

import { GuxButtonComponent } from './components/gux-button/gux-button.component';
import { GuxDropdownComponent } from './components/gux-dropdown/gux-dropdown.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [
    GuxButtonComponent,
    GuxDropdownComponent
  ],
  exports: [
    GuxButtonComponent,
    GuxDropdownComponent
  ]
})
export class GuxModule { }
