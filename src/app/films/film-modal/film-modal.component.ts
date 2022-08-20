import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-film-modal',
  templateUrl: './film-modal.component.html',
  styleUrls: ['./film-modal.component.scss'],
})
export class FilmModalComponent implements OnInit {
  @ViewChild('f', {static: true}) form: NgForm;
  @Input() prevod: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddFilm() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss({
      filmData:
        {
          nazivFilma: this.form.value['nazivFilm'],
          text: this.form.value['text']
        }
    }, 'confirm');

  }
}
