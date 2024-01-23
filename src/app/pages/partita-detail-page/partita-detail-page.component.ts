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

  //Calcola la percentuale sulla base di due valori di tipo number
  calcolaPercentuale(colore: string, a: number, b:number ) {
    const sommaPercentuali = a + b;

    return {
      'flex': `0 0 ${(a / sommaPercentuali) * 100}%`,
      'background-color': colore
    };
  }

  //Calcola la percentuale sulla base di due valori di tipo string
  calcolaPercentualeString(colore: string, a: string, b: string) {
    const valoreA = parseFloat(a);
    const valoreB = parseFloat(b);
  
    const sommaPercentuali = valoreA + valoreB;
    const percentuale = (valoreA / sommaPercentuali) * 100;

    return {
      'flex': `${percentuale}%`,
      'background-color': colore,
    };
  }

  //Game
  isLoadingGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingGame(idGame: string) {
    this.apiService.getPartita(this.idGame).subscribe({
      next: (response: GameDetail[]) => {
        this.partite = response;
      },
      error: (error) => console.error('Error fetching games', error),
      complete: () => {return this.isLoadingGame = false}
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idGame = params['idGame'];

      this.loadingGame(this.idGame)

    });
  }
}
