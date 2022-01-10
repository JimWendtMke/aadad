import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs/docs.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'docs',
  pathMatch: 'full'
}, {
  path: 'docs',
  component: DocsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
