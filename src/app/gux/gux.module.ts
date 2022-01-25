import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';

import { GuxAvatarComponent } from './components/gux-avatar/gux-avatar.component';
import { GuxButtonComponent } from './components/gux-button/gux-button.component';
import { GuxDropdownComponent } from './components/gux-dropdown/gux-dropdown.component';
import { GuxTableComponent } from './components/gux-table/gux-table.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [
    GuxAvatarComponent,
    GuxButtonComponent,
    GuxDropdownComponent,
    GuxTableComponent
  ],
  exports: [
    GuxAvatarComponent,
    GuxButtonComponent,
    GuxDropdownComponent,
    GuxTableComponent
  ]
})
export class GuxModule { }
