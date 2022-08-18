import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstraziPage } from './istrazi.page';

const routes: Routes = [
  {
    path: '',
    component: IstraziPage
  },


  {
    path: ':filmId',
    loadChildren: () => import('./o-filmu/o-filmu.module').then( m => m.OFilmuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstraziPageRoutingModule {}
