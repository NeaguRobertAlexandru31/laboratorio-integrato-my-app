import { Component, OnInit, ViewChild } from '@angular/core';
import { GameApiService } from '../mock-api-service.service';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
  games: any[] = [];
  currentDate: Date = new Date;

  constructor(private gameApiService: GameApiService) {}

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames() {
    this.gameApiService.getGames().subscribe(
      (data: any[]) => {
        this.games = data;
        console.log('Dati dei giochi:', this.games);
      },
      (error: any) => {
        console.error('Si è verificato un errore:', error);
      }
    );
  }

  onDateChange(selectedDate: Date): void {
    this.currentDate = selectedDate;
  }

  
}
