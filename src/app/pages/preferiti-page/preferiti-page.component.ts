import { Component, OnInit } from '@angular/core';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

import FavoriteGame from 'src/app/_models/favorite.model';
import FavoriteTeam from 'src/app/_models/favorite.model';
import FavoritePlayer from 'src/app/_models/favorite.model';
import ListFavGames from 'src/app/_models/favorite.model';
import ListFavTeams from 'src/app/_models/favorite.model';
import ListFavPlayers from 'src/app/_models/favorite.model';

import { DateTime } from 'luxon';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss'],
})
export class PreferitiPageComponent implements OnInit {
  favoriteGames: FavoriteGame[] = [];
  favoriteTeams: FavoriteTeam[] = [];
  favoritePlayers: FavoritePlayer[] = [];

  listFavGames: ListFavGames[] = [];
  listFavTeams: ListFavTeams[] = [];
  listFavPlayers: ListFavPlayers[] = [];

  constructor(private favoriteApiService: FavoriteApiService) {}

  token: string = '';

  tokenVerify: boolean = false;

  accordionPartite:boolean = true;
  accordionSquadre: boolean = false;
  accordionGiocatori: boolean = false;

  accordionFavorite(section: string) {
    if (section == 'squadre') {
      this.accordionPartite = false;
      this.accordionSquadre = true;
      this.accordionGiocatori = false;
    } else if (section == 'giocatori') {
      this.accordionPartite = false;
      this.accordionSquadre = false;
      this.accordionGiocatori = true;
    } else if(section == 'partite'){
      this.accordionPartite = true;
      this.accordionSquadre = false;
      this.accordionGiocatori = false;
    }
  }

  //Games
  isLoadingGames: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingGames() {
    this.updateListGame()
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getFavoriteGames().subscribe({
        next: (response: FavoriteGame[]) => {
          this.favoriteGames = response;
        },
        error: (error) => console.error('Error fetching games', error),
        complete: () => {
          return (this.isLoadingGames = false);
        },
      });
    }
  }

  //Teams
  isLoadingTeams: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingTeams() {
    this.updateListTeam()
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getFavoriteTeam().subscribe({
        next: (response: FavoriteTeam[]) => {
          this.favoriteTeams = response;
        },
        error: (error) => console.error('Error fetching team', error),
        complete: () => {
          return (this.isLoadingTeams = false);
        },
      });
    }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingPlayers() {
    this.updateListPlayer()
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getFavoritePlayer().subscribe({
        next: (response: FavoriteTeam[]) => {
          this.favoritePlayers = response;
        },
        error: (error) => console.error('Error fetching players', error),
        complete: () => {
          return (this.isLoadingPlayers = false);
        },
      });
    }
  }

  //Formattazione della data per i casi in cui la partita non e ancora stata giocata o non soo disponibili i risultati
  formatData(start:string) {
    const dateTimeObject = DateTime.fromISO(start); //Converte una stringa in un type DataTime
    const formattedDate = dateTimeObject.toFormat("dd-MM-yyyy"); //Formatta la data
    const formattedTime = dateTimeObject.toFormat("HH:mm"); //Formatta l'orario

    return `${formattedDate}\n${formattedTime}`; //Restuisce una data formatta 
  }

  //Funzione di caricamento e aggiornamento della lista preferiti
  updateListGame() {
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getListFavoriteGames().subscribe({
        next: (response: ListFavGames[]) => {
          this.listFavGames = response;
        },
        error: (error) => console.error('Error fetching favorite games', error),
  });}}
    //Gestische l'aggiunta e rimozione dei game
    setFavoriteGame(data: number) {
      try {
        this.favoriteApiService.addFavoriteGame(data);
      } finally {
        try {
          setTimeout(() => {
          this.updateListGame(); // Attendiamo che updateListPlayer sia completato
        },1000)
        } finally {
          setTimeout(() => {
          this.loadingGames();
        },1200)
        }
      }
    }

  updateListTeam() {
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getListFavoriteTeams().subscribe({
        next: (response: ListFavTeams[]) => {
          this.listFavTeams = response;
        },
        error: (error) => console.error('Error fetching favorite teams', error),
      });}}
  //Gestische l'aggiunta e rimozione dei team
  setFavoriteTeam(data: string) {
    try {
      this.favoriteApiService.addFavoriteTeam(data);
    } finally {
      try {
        setTimeout(() => {
        this.updateListTeam(); // Attendiamo che updateListPlayer sia completato
      },1000)
      } finally {
        setTimeout(() => {
        this.loadingTeams();
      },1200)
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
  //Gestische l'aggiunta e rimozione dei game
  setFavoritePlayers(data: number) {
    try {
      this.favoriteApiService.addFavoritePlayer(data);
    } finally {
      try {
        setTimeout(() => {
        this.updateListPlayer(); // Attendiamo che updateListPlayer sia completato
        },1000)
      } finally {
        setTimeout(() => {
        this.loadingPlayers();
      },1200)
      }
    }
  }

  //Cerca l'elemento all'interno dell'array
  isTeamInFavorites(type:string, id: number){
  let result;

  if(type === 'game'){
    return result = this.listFavGames && this.listFavGames.some(favGame => favGame.idGame === id);
  } else if(type === 'team'){
    return result = this.listFavTeams && this.listFavTeams.some(favTeam => favTeam.idTeam === id);
  } else if(type === 'player'){
    return result = this.listFavPlayers && this.listFavPlayers.some(favPlayer => favPlayer.idPlayer === id);
  }
  return result
  }

  ngOnInit() {
    if (localStorage.getItem('token')?.length) {
      this.tokenVerify = true;
    }

    this.loadingGames();
  }
}
