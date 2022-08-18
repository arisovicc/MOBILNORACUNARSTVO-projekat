import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GledajkasnijePage } from './gledajkasnije.page';

const routes: Routes = [
  {
    path: '',
    component: GledajkasnijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GledajkasnijePageRoutingModule {}
