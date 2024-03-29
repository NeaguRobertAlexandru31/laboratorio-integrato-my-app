import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import Ranking from 'src/app/_models/ranking.model';

@Component({
  selector: 'app-ovest-page',
  templateUrl: './ovest-page.component.html',
  styleUrls: ['./ovest-page.component.scss'],
})
export class OvestPageComponent {
  listsRanking: Ranking[] = [];
  currentDate: Date = new Date();

  constructor(private apiService: ApiService) {}

  mofidyWinPerc() {
    // Formatta La Percentuale da numero a stringa e lo restituisce
    this.listsRanking.forEach((ranking: any) => {
      //regola per la formattazione ,trasmorfa winPercentage da number a string
      const formattedValue = ranking.winPercentage.toFixed(); // Converti la stringa formattata in un numero intero in base Decimale(10)
      ranking.winPercentage = parseInt(formattedValue, 10);
    });
  }
  modifyLose() {
    this.listsRanking.forEach((ranking: any) => {
      //Mi appoggio ad una variabile per salvere il numero in valore assoluto e restituirlo a listsRanking
      const newLose = Math.abs(ranking.lose);
      ranking.lose = newLose;
    });
  }

  //Ranking
  isLoadingRanking: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingRanking() {
    this.isLoadingRanking = true;
    this.apiService.getRankingOvest().subscribe({
      next: (response:any) => {
        this.listsRanking = response;
        this.mofidyWinPerc(), this.modifyLose();
      },
      error: (error) => console.error('Error fetching ranking', error),
      complete: () => {return this.isLoadingRanking = false}
    });
  }
  
  ngOnInit() {
    this.loadingRanking();
  }
}
