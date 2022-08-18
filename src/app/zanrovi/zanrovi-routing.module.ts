import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZanroviPage } from './zanrovi.page';

const routes: Routes = [
  {
    path: '',
    component: ZanroviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZanroviPageRoutingModule {}
