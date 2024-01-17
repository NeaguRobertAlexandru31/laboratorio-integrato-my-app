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
  test: number = 10;
  rankPosition: number = 1;
  apiIsReady: boolean = false;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getRankingEast().subscribe((response: any) => {
      this.listsRanking = response;
      this.modifyWinPercentage();
      this.modifyLose();
      this.apiIsReady = true;
      setTimeout(() => {
        this.createRankPosition();
      }, 5000);
    });
  }
  modifyWinPercentage() {
    // Formatta La Percentuale da numero a stringa e lo restituisce

    this.listsRanking.forEach((ranking) => {
      //regola per la formattazione ,trasmorfa winPercentage da number a string
      const formattedValue = ranking.winPercentage.toFixed();

      // Converti la stringa formattata in un numero intero in base Decimale(10)
      ranking.winPercentage = parseInt(formattedValue, 10);
    });
  }
  modifyLose() {
    this.listsRanking.forEach((ranking) => {
      //Mi appoggio ad una variabile per salvere il numero in valore assoluto e restituirlo a listsRanking
      const newLose = Math.abs(ranking.lose);
      ranking.lose = newLose;
    });
  }
  //Funzione per creare le posizioni della classifica,l'ordine già dato dalla chiamata API
  createRankPosition() {
    if (this.apiIsReady) {
      console.log(this.rankPosition);
      return this.rankPosition++;
    } else {
      this.rankPosition = 1;
      return null;
    }
  }
  //Funzione che serve per non far partire subito il counter ma aspettare la chiamata API prima di caricare
  awaitAPi() {
    return (this.rankPosition = 1);
  }
}
