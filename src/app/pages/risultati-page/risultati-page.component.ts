import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';

//Chiama API
import { ApiService } from '../../_service/api.service';
import Game from '../../_models/game.model';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
  games: Game[] = [];
  currentDate: DateTime = DateTime.now();
  idGame: number = 0;
  isLoading: boolean = true; // Flag per indicare se le partite sono in fase di caricamento

  constructor(private apiService: ApiService) {}

  getGradient(game: Game): string {
    if (game.homeColour === null) {
      return `linear-gradient(to right, #ffffff, #${game.visitorsColour}B3)`;
    } else if (game.visitorsColour === null) {
      return `linear-gradient(to right, #${game.homeColour}B3, #ffffff)`;
    } else if (game.homeColour === null && game.visitorsColour === null) {
      return `linear-gradient(to right, #808080B3, #ffffff)`;
    }
    return `linear-gradient(to right, #${game.homeColour}B3, #${game.visitorsColour}B3)`;
  }

  ngOnInit(){
    this.loadGames(this.currentDate);
    this.apiService.getGames(this.currentDate.toFormat('yyyy-MM-dd')).subscribe( (response) => {
      this.games = response;
    });
  }

  loadGames(date: DateTime) {
    this.isLoading = true; // Imposta il flag di caricamento a true
    this.apiService.getGames(date.toFormat('yyyy-MM-dd')).subscribe(
      (response) => {
        this.games = response;
      },
      (error) => {
        console.error('Error fetching games', error);
      },
      () => {
        this.isLoading = false; // Imposta il flag di caricamento a false quando il caricamento è completo
      }
    );
  }

  receiveDate(date:Date){
    console.log(date);
    this.apiService.getGames(DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')).subscribe( (response) => {
      this.games = response;
    });
    this.loadGames(DateTime.fromJSDate(date));
  }
}
