import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../film.model';

@Component({
  selector: 'app-film-element',
  templateUrl: './film-element.component.html',
  styleUrls: ['./film-element.component.scss'],
})
export class FilmElementComponent implements OnInit { //ono sto smo se pitali u film-element.component.html, odgovor je da u okviru film: Films ubacimo dekorator
  //@Input()

  @Input() film: Film = {id: 'f3', text: 'Novi', nazivFilma: 'Text', imageUrl: ''};

  constructor() { }

  ngOnInit() {}

}
