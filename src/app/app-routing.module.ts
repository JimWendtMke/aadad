import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponentBaseComponent } from './docs/components/component-base/component-base.component';

import { DocsComponent } from './docs/docs.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'docs',
  pathMatch: 'full'
}, {
  path: 'docs',
  component: DocsComponent
}, {
  path: 'components/:target',
  component: DocsComponentBaseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
