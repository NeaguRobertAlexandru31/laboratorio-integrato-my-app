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

  constructor(private apiService: ApiService) {}

  getGradient(game: Game): string {
    if(game.homeColour === null){
      return `linear-gradient(to right, #ffffff, #${game.visitorsColour}B3)`
    }else if(game.visitorsColour === null){
      return `linear-gradient(to right, #${game.homeColour}B3, #ffffff)`
    }else if(game.homeColour === null && game.visitorsColour === null){
      return `linear-gradient(to right, #808080B3, #ffffff)`
    }
    return `linear-gradient(to right, #${game.homeColour}B3, #${game.visitorsColour}B3)`;
  }

  ngOnInit(){

    this.apiService.getGames(this.currentDate.toFormat('yyyy-MM-dd')).subscribe( (response) => {
      this.games = response;
    });
  }
}
