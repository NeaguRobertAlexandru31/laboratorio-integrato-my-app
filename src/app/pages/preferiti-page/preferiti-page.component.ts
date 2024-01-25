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

  tokenVerify: boolean = false; //Stato del token

  accordionPartite:boolean = true; //Stato partite 
  accordionSquadre: boolean = false; //Stato squadra
  accordionGiocatori: boolean = false; //Stato giocare

  //Gestore dell'accordione delle section
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
    this.updateListGame() //Aggiorna la lista dei game
    if (localStorage.getItem('token')) { //Viene fatto il controllo della presenza del token
      this.favoriteApiService.getFavoriteGames().subscribe({
        next: (response: FavoriteGame[]) => {
          this.favoriteGames = response; //I valori vengono inseriti nell'array
        },
        error: (error) => console.error('Error fetching games', error),
        complete: () => { //Quando il tutto viene completato viene cambiato lo stato di isLoadingGames
          return (this.isLoadingGames = false);
        },
      });
    }
  }

  //Teams
  isLoadingTeams: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingTeams() {
    this.updateListTeam() //Aggiorna la lista dei team
    if (localStorage.getItem('token')) { //Viene fatto il controllo della presenza del token
      this.favoriteApiService.getFavoriteTeam().subscribe({
        next: (response: FavoriteTeam[]) => {
          this.favoriteTeams = response; //I valori vengono inseriti nell'array
        },
        error: (error) => console.error('Error fetching team', error),
        complete: () => { //Quando il tutto viene completato viene cambiato lo stato di isLoadingTeams
          return (this.isLoadingTeams = false);
        },
      });
    }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento controlla lo stato della chiamata se restituisce o meno
  loadingPlayers() {
    this.updateListPlayer() //Aggiorna la lista dei player
    if (localStorage.getItem('token')) { //Viene fatto il controllo della presenza del token
      this.favoriteApiService.getFavoritePlayer().subscribe({
        next: (response: FavoriteTeam[]) => {
          this.favoritePlayers = response; //I valori vengono inseriti nell'array
        },
        error: (error) => console.error('Error fetching players', error),
        complete: () => { //Quando il tutto viene completato viene cambiato lo stato di isLoadingPlayers
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
          this.listFavGames = response; //I valori vengono inseriti nell'array
        },
        error: (error) => console.error('Error fetching favorite games', error),
  });}}

    //Gestische l'aggiunta e rimozione dei team
    setFavoriteGame(data: number) {
      try {
        this.favoriteApiService.addFavoriteGame(data); // Aggiunge il giocatore ai preferiti utilizzando il servizio favoriteApiService
      } finally {
        try {
          setTimeout(() => { // Attende 1 secondo prima di chiamare la funzione "updateListGame"
          this.updateListGame(); // Attendiamo che updateListGame sia completato
        },1000)
        } finally {
          setTimeout(() => { // Attende 1 secondo prima di chiamare la funzione "loadingGames"
          this.loadingGames();
        },1200)
        }
      }
    }

  //Funzione di caricamento e aggiornamento della lista preferiti
  updateListTeam() {
    if (localStorage.getItem('token')) {
      this.favoriteApiService.getListFavoriteTeams().subscribe({
        next: (response: ListFavTeams[]) => {
          this.listFavTeams = response; //I valori vengono inseriti nell'array
        },
        error: (error) => console.error('Error fetching favorite teams', error),
      });}}

  //Gestische l'aggiunta e rimozione dei team
  setFavoriteTeam(data: string) {
    try {
      this.favoriteApiService.addFavoriteTeam(data); // Aggiunge il giocatore ai preferiti utilizzando il servizio favoriteApiService
    } finally {
      try {
        setTimeout(() => { // Attende 1 secondo prima di chiamare la funzione "updateListTeams"
        this.updateListTeam(); // Attendiamo che updateListPlayer sia completato
      },1000)
      } finally {
        setTimeout(() => { // Attende 1.2 secondo prima di chiamare la funzione "loadingTeams"
        this.loadingTeams();
      },1200)
      }
    }
  }

  updateListPlayer() {
    if (localStorage.getItem('token')) {
    this.favoriteApiService.getListFavoritePlayers().subscribe({
      next: (response: ListFavPlayers[]) => {
        this.listFavPlayers = response; //I valori vengono inseriti nell'array
      },
      error: (error) => console.error('Error fetching favorite players', error),
    });}}

  //Gestische l'aggiunta e rimozione dei player preferiti
  setFavoritePlayers(data: number) {
    try {
      this.favoriteApiService.addFavoritePlayer(data); // Aggiunge il giocatore ai preferiti utilizzando il servizio favoriteApiService
    } finally {
      try {
        setTimeout(() => { // Attende 1 secondo prima di chiamare la funzione "updateListPlayer"
        this.updateListPlayer(); // Attende il completamento della funzione
        },1000)
      } finally {
        setTimeout(() => { // Attendi 1.2 secondi prima di chiamare la funzione "loadingPlayers"
        this.loadingPlayers();
      },1200)
      }
    }
  }

  //Cerca l'elemento i valore dell'array 
  isTeamInFavorites(type:string, id: number){
  let result; //Dichiaro il valore
  if(type === 'game'){
    //Controlla se almeno uno degli elementi in listFavGames ha un ID del gioco uguale al valore di id
    return result = this.listFavGames && this.listFavGames.some(favGame => favGame.idGame === id);
  } else if(type === 'team'){
    //Controlla se almeno uno degli elementi in listFavTeams ha un ID del gioco uguale al valore di id
    return result = this.listFavTeams && this.listFavTeams.some(favTeam => favTeam.idTeam === id);
  } else if(type === 'player'){
    //Controlla se almeno uno degli elementi in listFavPlayers ha un ID del gioco uguale al valore di id
    return result = this.listFavPlayers && this.listFavPlayers.some(favPlayer => favPlayer.idPlayer === id);
  }
  return result
  }

  ngOnInit() {
    //Controllo del token, se presente lo stato del token passa a true
    if (localStorage.getItem('token')?.length) { //Il token viene recuerato dal localStorage
      this.tokenVerify = true; //Cambio dello stato del token
    }

    this.loadingGames(); //Chiamata per la lista dei game presenti tra i preferiti
  }
}
