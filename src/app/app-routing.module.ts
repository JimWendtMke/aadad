import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponentBaseComponent } from './docs/components/component-base/component-base.component';
import { DocsInterfaceBaseComponent } from './docs/components/interface-base/interface-base.component';

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
}, {
  path: 'interfaces/:target',
  component: DocsInterfaceBaseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
