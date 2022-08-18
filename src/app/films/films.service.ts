import { Injectable } from '@angular/core';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  films: Film [] = [ //ovim definisemo neki niz filmova koji zelimo da se prikaze na stranici istrazi
  {id: 'f1', nazivFilma: 'NazivFilma1', text: 'Veoma interesanstan film.', imageUrl: 'https://www.fest.rs/upload/products/anet-449655486.jpg'},
  {id: 'f2', nazivFilma: 'NazivFilma2', text: 'Veoma zanimljiv film.', imageUrl: 'https://m.buro247.rs/images/2019/12/1576950834313619.jpg'}
];


 // constructor() { }


  //const found = array1.find(element => element > 10);

  getFilm(id: string) {
    return this.films.find((f: Film ) => f.id === id);
  }



}
