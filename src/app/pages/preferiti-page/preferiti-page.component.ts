import { Component, OnInit } from '@angular/core';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

import FavoriteTeam from 'src/app/_models/favorite.model';
import FavoritePlayer from 'src/app/_models/favorite.model';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss'],
})
export class PreferitiPageComponent implements OnInit {
  favoriteTeams: FavoriteTeam[] = [];
  favoritePlayers: FavoritePlayer[] = [];

  constructor(private apiService: FavoriteApiService) {}

  token: string = '';

  tokenVerify: boolean = false;

  // accordionPartite:boolean = true;
  accordionSquadre: boolean = true;
  accordionGiocatori: boolean = false;

  accordionFavorite(section: string) {
    if (section == 'squadre') {
      //this.accordionPartite = false;
      this.accordionSquadre = true;
      this.accordionGiocatori = false;
    } else if (section == 'giocatori') {
      //this.accordionPartite = false;
      this.accordionSquadre = false;
      this.accordionGiocatori = true;
    } //else if(section == 'partite'){
    //   this.accordionPartite = true;
    //   this.accordionSquadre = false;
    //   this.accordionGiocatori = false;
    // }
  }

  //Teams
  isLoadingTeams: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedTeams: boolean = false;
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingTeams() {
    if (this.isLoadedTeams == false && localStorage.getItem('token')) {
      this.apiService.getFavoriteTeam().subscribe({
        next: (response: FavoriteTeam[]) => {
          this.favoriteTeams = response;
        },
        error: (error) => console.error('Error fetching players', error),
        complete: () => {
          return (this.isLoadingTeams = false), (this.isLoadedTeams = true);
        },
      });
    }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedPlayer: boolean = false;
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingPlayers() {
    if (this.isLoadedPlayer == false && localStorage.getItem('token')) {
      this.apiService.getFavoritePlayer().subscribe({
        next: (response: FavoritePlayer[]) => {
          this.favoritePlayers = response;
        },
        error: (error) => console.error('Error fetching players', error),
        complete: () => {
          return (this.isLoadingPlayers = false), (this.isLoadedPlayer = true);
        },
      });
    }
  }

  ngOnInit() {
    if (localStorage.getItem('token')?.length) {
      this.tokenVerify = true;
      console.log('sono qua')
    }

    this.loadingTeams();
  }
}
