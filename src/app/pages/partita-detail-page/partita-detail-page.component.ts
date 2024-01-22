import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

import GameDetail from '../../_models/gameDetail.model';

@Component({
  selector: 'app-partita-detail-page',
  templateUrl: './partita-detail-page.component.html',
  styleUrls: ['./partita-detail-page.component.scss'],
})
export class PartitaDetailPageComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  partite: GameDetail[] = [];

  idGame: string = '';

  teamName: string = '';

  toNumber(a: string, b: string) {
    let primo: string = a;
    let secondo: string = b;
    let c: number = Number(primo + secondo);
    return c;
  }

  isVisible = false;

  openStats() {
    this.isVisible = !this.isVisible;
  }

  calcolaPercentuale(colore: string, a: number, b:number ) {
    const sommaPercentuali = a + b;

    return {
      'flex': `0 0 ${(a / sommaPercentuali) * 100}%`,
      'background-color': colore
    };
  }
  // calcolaPercentuali(A:number, B:number, lunghezzaTotale:number) {
  //   const percentualeA = (A / (A + B)) * 100;
  //   const percentualeB = (B / (A + B)) * 100;

  //   const lunghezzaA = (percentualeA / 100) * lunghezzaTotale;
  //   const lunghezzaB = (percentualeB / 100) * lunghezzaTotale;

  //   return {
  //       percentualeA: percentualeA,
  //       percentualeB: percentualeB,
  //       lunghezzaA: lunghezzaA,
  //       lunghezzaB: lunghezzaB
  //   };
  // }
  

  // calcolaBackground(A:number, B:number, coloreA: string, coloreB: string) {

  //   const risultati = this.calcolaPercentuali(A, B, A+B);

  //   const parteStringaA = `'${risultati.percentualeA.toFixed(2)}% ,'`;
  //   const parteStringaB = `'${risultati.percentualeB.toFixed(2)}%'`;

  //   return coloreA + parteStringaA + coloreB + parteStringaB + ')';
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idGame = params['idGame'];

      this.apiService.getPartita(this.idGame).subscribe( (response) => {
      this.partite = response;
      });

    });
  }
}
