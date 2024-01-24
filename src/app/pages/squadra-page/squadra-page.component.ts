import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
import { ActivatedRoute } from '@angular/router';

import Team from '../../_models/team.model';
import TeamStats from '../../_models/team.model';
import Player from 'src/app/_models/player.model';
import Game from 'src/app/_models/game.model';

import ListFavGames from 'src/app/_models/favorite.model';
import ListFavTeams from 'src/app/_models/favorite.model';
import ListFavPlayers from 'src/app/_models/favorite.model';
import FavoriteTeam from 'src/app/_models/favorite.model';

@Component({
  selector: 'squadra-page',
  templateUrl: './squadra-page.component.html',
  styleUrls: ['./squadra-page.component.scss']
})
export class SquadraPageComponent implements OnInit{

  constructor(private apiService: ApiService, private favoriteApiService: FavoriteApiService, private activatedRoute: ActivatedRoute){  }

  teams: Team[] = [];
  teamStats: TeamStats[] = [];
  players: Player[] = [];
  prevoiusGame: Game[] = [];
  nextGame: Game[] = [];

  listFavGames: ListFavGames[] = [];
  listFavTeams: ListFavTeams[] = [];
  listFavPlayers: ListFavPlayers[] = [];

  teamName: string = '';

  idTeam: number = 0;

  year:number = (new Date().getFullYear())-1

  sectionPanoramica: boolean = true; //impostare come primo
  sectionPartite: boolean = false;
  sectionGiocatori: boolean = false;

  accordionTeam(section:string,) {
    if(section == 'panoramica'){
      this.sectionPanoramica = true;
      this.sectionPartite = false;
      this.sectionGiocatori = false;
    } else if(section == 'partite'){
      this.sectionPanoramica = false;
      this.sectionPartite = true;
      this.sectionGiocatori = false;
    } else if(section == 'giocatori'){
      this.sectionPanoramica = false;
      this.sectionPartite = false;
      this.sectionGiocatori = true;
    }
  }

  sectionRisultati: boolean = true;
  sectionProgrammate: boolean = false;

  accordionGame(section:string){
    if(section == 'risultati'){
      this.sectionRisultati = true;
      this.sectionProgrammate = false;
    } else if(section == 'programmate'){
      this.sectionRisultati = false;
      this.sectionProgrammate = true;
    }
  }

  isVisible = false;

  openStats() {
    this.isVisible = !this.isVisible;
  }

  //Team
  isLoadingTeam: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeam(teamName: string) {
    this.apiService.getThisTeam(teamName).subscribe({
      next: (response:Team[]) => {
        this.teams = response;
        this.idTeam = this.teams[0].idTeam;
        this.loadingTeamStats(this.idTeam); //Chiamata API statistiche stagionali squadra
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //TeamStatiscs
  isLoadingTeamStats: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeamStats(idTeam: number) {
    this.apiService.getThisTeamStats(idTeam,this.year).subscribe({
      next: (response:any[]) => {
        this.teamStats = response;
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //PreviousGame
  isLoadingPreviousGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingPreviousGame(idTeam: number) {
    this.apiService.getPreviousGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.prevoiusGame = response;
      },
      error: (error) => console.error('Error fetching prevoius game', error),
      complete: () => {
        return this.isLoadingPreviousGame = false;
      }
    });
  }

  //NextGame
  isLoadingNextGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedNext:boolean = false; // Flag per indicare se l'array e gia stato caricato
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  loadingNextGame(idTeam: number) {
    if(this.isLoadedNext == false){
    this.apiService.getNextGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.nextGame = response;
      },
      error: (error) => console.error('Error fetching next game', error),
      complete: () => {return this.isLoadingNextGame = false, this.isLoadedNext = true}
    });
  }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  async loadingPlayers(teamId: number) {
    this.apiService.getGiocatoriSquadra(teamId,2023).subscribe({
      next: (response:Player[]) => {
        this.players = response;
      },
      error: (error) => console.error('Error fetching players', error),
      complete: () => {return this.isLoadingPlayers = false}
    });
  }

  //Calcola la media di due valori di tipo number
  calculateRoundedAverage(aNumber:number, bMedia:number){
    return Math.round(aNumber / bMedia);
  }

  updateListGame() {
    if (localStorage.getItem('token')) {
    this.favoriteApiService.getListFavoriteGames().subscribe({
      next: (response: ListFavPlayers[]) => {
        this.listFavGames = response;
      },
      error: (error) => console.error('Error fetching favorite game', error),
    });}}  
    // Gestisci l'aggiunta e rimozione dei player
    // Questa funzione utilizza dei setTimeout per mantenere una gerarchia di caricamento per non sovrapporre le chiamate che vanno eseguite una dopo l'altra
    setFavoriteGame(data: number, idGame: number) {
      try {
        this.favoriteApiService.addFavoriteGame(data);
      } finally {
        try {
          setTimeout(() => {
          this.updateListGame(); // Attendiamo che updateLiupdateListGamestPlayer sia completato
          },1000)
        } finally {
          setTimeout(() => {
          this.loadingPreviousGame(idGame);
          },1200)
        }
      }
    }

  //Funzione di caricamento e aggiornamento della lista preferiti
  updateListTeam() {
    if (localStorage.getItem('token')) {
    this.favoriteApiService.getListFavoriteTeams().subscribe({
      next: (response: ListFavTeams[]) => {
        this.listFavTeams = response;
      },
      error: (error) => console.error('Error fetching favorite teams', error),
    });}}
    //Gestische l'aggiunta e rimozione dei game
    // Questa funzione utilizza dei setTimeout per mantenere una gerarchia di caricamento per non sovrapporre le chiamate che vanno eseguite una dopo l'altra
    async setFavoriteTeam(data: string) {
      try {
        await this.favoriteApiService.addFavoriteTeam(data);
      } finally {
        try {
          setTimeout(() => {
            this.updateListTeam();
        }, 1000); // Attendiamo che updateListTeam sia completato
        } finally {
          setTimeout(() => {
            this.loadingTeam(data);
        }, 1200);
        }
      }
    }

  updateListPlayer() {
    if (localStorage.getItem('token')) {
    this.favoriteApiService.getListFavoritePlayers().subscribe({
      next: (response: ListFavPlayers[]) => {
        this.listFavPlayers = response;
      },
      error: (error) => console.error('Error fetching favorite players', error),
    });}}  
    // Gestisci l'aggiunta e rimozione dei player
    // Questa funzione utilizza dei setTimeout per mantenere una gerarchia di caricamento per non sovrapporre le chiamate che vanno eseguite una dopo l'altra
    setFavoritePlayer(data: number, idTeam: number) {
      try {
        this.favoriteApiService.addFavoritePlayer(data);
      } finally {
        try {
          setTimeout(() => {
          this.updateListPlayer();
          },1000) // Attendiamo che updateListPlayer sia completato
        } finally {
          setTimeout(() => {
          this.loadingPlayers(idTeam);
          },1200)
        }
      }
    }

  //Cerca l'elemento all'interno dell'array
  //Questa funzione e stata scritta con l'utilizzo di if per compattare in una singola funzione e non averla frammentata
  isTeamInFavorites(id:number, array:FavoriteTeam[]) {
    //Itera all'interno dell'array fino a che una condizione non viene soddisfatta bloccando il processo con un return
    for (let i = 0; i < array.length; i++) {
      //Confronta i vari tipi di dati tramite una condizione
      if (array[i].idGame === id) { 
        return true;
      } else if (array[i].idTeam === id) {
        return true;
      } else if (array[i].idPlayer === id) {
        return true;
      }
    }
    return false; //In caso nessuna delle condizioni fosse soddisfatta
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.teamName = params['teamName']; //Viene recuperato il parametro trmaite activateRoute e inizzializzato nella varibile 

      this.accordionTeam('panoramica');
      this.accordionGame('risultati');

      //I valori vengono riportati a quelli originali
      this.isLoadingTeam = false;
      this.isLoadedNext = false;

      this.loadingTeam(this.teamName); //Chiamata API squadra
      this.updateListTeam(); //Chiamata API per la lisa dei team preferiti
      this.updateListPlayer();//Chiamata API per la lisa dei player preferiti
    })
  }

}
