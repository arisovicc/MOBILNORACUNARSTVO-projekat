import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OFilmuPage } from './o-filmu.page';

const routes: Routes = [
  {
    path: '',
    component: OFilmuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OFilmuPageRoutingModule {}
