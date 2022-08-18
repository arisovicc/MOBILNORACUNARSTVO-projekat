import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OFilmuPageRoutingModule } from './o-filmu-routing.module';

import { OFilmuPage } from './o-filmu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OFilmuPageRoutingModule
  ],
  declarations: [OFilmuPage]
})
export class OFilmuPageModule {}
