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
  currentDate: Date = new Date();
  idGame: number = 0;

  sectionResult: boolean = true;
  
  constructor(private apiService: ApiService) {}
  
    //Games
    isLoading: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
    //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
    loadingTeams(date: Date) {
      this.apiService.getGames(DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')).subscribe({
        next: (response: Game[]) => {
          this.games = response;
        },
        error: (error) => console.error('Error fetching games', error),
        complete: () => {return this.isLoading = false}
      });
    }

  ngOnInit(){
    this.loadingTeams(this.currentDate);
  }
}
