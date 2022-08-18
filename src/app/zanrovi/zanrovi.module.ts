import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZanroviPageRoutingModule } from './zanrovi-routing.module';

import { ZanroviPage } from './zanrovi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZanroviPageRoutingModule
  ],
  declarations: [ZanroviPage]
})
export class ZanroviPageModule {}
