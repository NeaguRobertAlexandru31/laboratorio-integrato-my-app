import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import Ranking from 'src/app/_models/ranking.model';

@Component({
  selector: 'app-est-page',
  templateUrl: './est-page.component.html',
  styleUrls: ['./est-page.component.scss'],
})
export class EstPageComponent implements OnInit {
  listsRanking: Ranking[] = [];
  currentDate: Date = new Date();

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getRankingEast().subscribe((response: any) => {
      this.listsRanking = response;
      this.mofidyWinPerc(), this.modifyLose();
    });
  }
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
}
