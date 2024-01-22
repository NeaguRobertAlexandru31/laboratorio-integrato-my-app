import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import Game from 'src/app/_models/game.model';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-programmate-page',
  templateUrl: './programmate-page.component.html',
  styleUrls: ['./programmate-page.component.scss'],
})
export class ProgrammatePageComponent implements OnInit {
  nextGames:Game[] = []; 
  currentDate: Date = new Date();
  
  constructor(private apiService: ApiService) {}

  //Programmate
  isLoadingNext: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingProgrammate(date:Date) {
    this.isLoadingNext = true;
    this.apiService.getGames(DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')).subscribe({
      next: (response) => {
        this.nextGames = response;
      },
      error: (error) => console.error('Error fetching players', error),
      complete: () => {return this.isLoadingNext = false}
    });
  }
  ngOnInit() {
    this.loadingProgrammate(this.currentDate);
  }
  
}
