import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Film } from '../film.model';
import { FilmsService } from '../films.service';


@Component({
  selector: 'app-istrazi',
  templateUrl: './istrazi.page.html',
  styleUrls: ['./istrazi.page.scss'],
})
export class IstraziPage implements OnInit {

//  films: Film [] = [ //ovim definisemo neki niz filmova koji zelimo da se prikaze na stranici istrazi
 //   {id: 'f1', nazivFilma: 'NazivFilma1', text: 'Veoma interesanstan film.', imageUrl: 'https://www.fest.rs/upload/products/anet-449655486.jpg'},
 //   {id: 'f2', nazivFilma: 'NazivFilma2', text: 'Veoma zanimljiv film.', imageUrl: 'https://m.buro247.rs/images/2019/12/1576950834313619.jpg'}
  //];

  films: Film[];

  constructor(private menuCtrl: MenuController, private filmsService: FilmsService) {
    console.log('constructor');
    this.films = this.filmsService.films;
   }
   
   openManu() {
    this.menuCtrl.open();
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
