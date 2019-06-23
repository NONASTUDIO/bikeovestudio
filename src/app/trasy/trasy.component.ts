import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trasy',
  templateUrl: './trasy.component.html',
  styleUrls: ['./trasy.component.css']
})
export class TrasyComponent {
  numerWybranegoObrazka = 0;

  kliknietoElement(numerObrazka) {
    this.numerWybranegoObrazka = numerObrazka;
    console.warn('Numer wybranego obrazka: ', this.numerWybranegoObrazka);

  }

}