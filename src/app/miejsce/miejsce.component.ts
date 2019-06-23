import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miejsce',
  templateUrl: './miejsce.component.html',
  styleUrls: ['./miejsce.component.css']
})
export class MiejsceComponent {
  numerWybranegoObrazka = 0;

  kliknietoElement(numerObrazka) {
    this.numerWybranegoObrazka = numerObrazka;
    console.warn('Numer wybranego obrazka: ', this.numerWybranegoObrazka);

  }

}