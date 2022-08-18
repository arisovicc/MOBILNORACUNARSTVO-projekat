import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../film.model';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-o-filmu',
  templateUrl: './o-filmu.page.html',
  styleUrls: ['./o-filmu.page.scss'],
})
export class OFilmuPage implements OnInit {

  //definisemo jedan citat
  film: Film =  {id: 'f1', nazivFilma: 'NazivFilma1', text: 'Veoma interesanstan film.', imageUrl: 'https://www.fest.rs/upload/products/anet-449655486.jpg'};

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.film = this.filmsService.getFilm(paramMap.get('filmId'));
    });
  }

}
