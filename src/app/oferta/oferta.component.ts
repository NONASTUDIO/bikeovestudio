import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {
  numerWybranegoObrazka = 0;

  kliknietoElement(numerObrazka) {
    this.numerWybranegoObrazka = numerObrazka;
    console.warn('Numer wybranego obrazka: ', this.numerWybranegoObrazka);

  }

}