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

  calcolaBackground(coloreA: string, coloreB: string) {
    const A = 30; // Sostituisci con il tuo valore
    const B = 70; // Sostituisci con il tuo valore
    const lunghezzaTotale = 500; // Sostituisci con la tua lunghezza totale

    const risultati = this.calcolaPercentuali(A, B, lunghezzaTotale);

    // Costruisci la parte della stringa con le percentuali
    const parteStringaA = `'B3 ${risultati.percentualeA.toFixed(2)}% ,'`;
    const parteStringaB = `'B3 ${risultati.percentualeB.toFixed(2)}% ,'`;

    return coloreA + parteStringaA + coloreB + parteStringaB + ')';
  }

  calcolaPercentuali(A:number, B:number, lunghezzaTotale:number) {
    const percentualeA = (A / (A + B)) * 100;
    const percentualeB = (B / (A + B)) * 100;

    const lunghezzaA = (percentualeA / 100) * lunghezzaTotale;
    const lunghezzaB = (percentualeB / 100) * lunghezzaTotale;

    return {
        percentualeA: percentualeA,
        percentualeB: percentualeB,
        lunghezzaA: lunghezzaA,
        lunghezzaB: lunghezzaB
    };
}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idGame = params['idGame'];

      this.apiService.getPartita(this.idGame).subscribe( (response) => {
      this.partite = response;
      });

    });
  }
}
