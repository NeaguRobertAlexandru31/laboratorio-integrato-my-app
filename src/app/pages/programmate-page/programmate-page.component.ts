import { Component, OnInit } from '@angular/core';
import Game from 'src/app/_models/game.model';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-programmate-page',
  templateUrl: './programmate-page.component.html',
  styleUrls: ['./programmate-page.component.scss'],
})
export class ProgrammatePageComponent implements OnInit {
  nextGames:Game[] = []; 
  
  constructor(private apiService: ApiService) {}

  // //Programmate
  // isLoadingNext: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  // isLoadedNextGames:boolean = false;
  // //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  // loadingPlayers(teamId: number) {
  //   if(this.isLoadedNextGames == false){
  //   this.isLoadingNext = true;
  //   this.apiService.getNextGame(teamId,2023).subscribe({
  //     next: (response) => {
  //       this.nextGames = response;
  //     },
  //     error: (error) => console.error('Error fetching players', error),
  //     complete: () => {return this.isLoadingPlayers = false, this.isLoadedPlayer = true}
  //   });
  // }
  // }
  ngOnInit() {
    // this.receiveData()
  }

  
}
