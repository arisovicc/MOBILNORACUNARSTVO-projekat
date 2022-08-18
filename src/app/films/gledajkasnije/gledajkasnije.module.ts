import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GledajkasnijePageRoutingModule } from './gledajkasnije-routing.module';

import { GledajkasnijePage } from './gledajkasnije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GledajkasnijePageRoutingModule
  ],
  declarations: [GledajkasnijePage]
})
export class GledajkasnijePageModule {}
