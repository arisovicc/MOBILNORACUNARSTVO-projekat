import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Film } from '../../film.model';

@Component({
  selector: 'app-film-element',
  templateUrl: './film-element.component.html',
  styleUrls: ['./film-element.component.scss'],
})
export class FilmElementComponent implements OnInit { //ono sto smo se pitali u film-element.component.html, odgovor je da u okviru film: Films ubacimo dekorator
  //@Input()

  @Input() film: Film = {id: 'f3', text: 'Novi', nazivFilma: 'Text', imageUrl: ''};

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  openAlert() {
    this.alertCtrl.create({
      header: 'Sacuvaj film',
      message: 'Da li si siguran da zelis da sacuvas ovaj film?',
      buttons: [
        {
          text: 'Sacuvaj',
          handler: () => {
            console.log('Sacuvaj ga!');
          }
        }, 
      {
        text: 'Otkazi',
        role: 'cancel',
        handler: () => {
          console.log('Nemoj da sacuvas!');
        }
      }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
