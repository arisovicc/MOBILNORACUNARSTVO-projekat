import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IstraziPageRoutingModule } from './istrazi-routing.module';
import { IstraziPage } from './istrazi.page';
import { FilmElementComponent } from './film-element/film-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstraziPageRoutingModule
  ],                                                   //ovo radimo da bismo prikazali niz citata koji smo napravili i da bi se prikazala na istrazi stranici
  declarations: [IstraziPage, FilmElementComponent] //moramo da deklasiremo FilmElementComponent da bismo mogli da iskoristimo films komponentu na istrazi stranici
})
export class IstraziPageModule {}
