import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs';

import FavoriteTeam from '../_models/favorite.model';
import FavoritePlayer from '../_models/favorite.model';
import FavoriteGame from '../_models/favorite.model';

import ListFavGame from '../_models/favorite.model';
import ListFavTeam from '../_models/favorite.model';
import ListFavPlayer from '../_models/favorite.model';

// Model

@Injectable({
  providedIn: 'root',
})
export class FavoriteApiService {
  
  constructor(private http: HttpClient) {}

  /* baseUrl = 'http://localhost:8045/'; */
  baseUrl = 'http://hoopsdata.ddns.net:8045/';

  tokenVerify:boolean = false;

  //Prende le squadre preferite
  getFavoriteGames(): Observable<FavoriteGame[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
    // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<FavoriteGame[]>(this.baseUrl + 'fav/get/game', formData).pipe(
      map((response: any) => {
        /* console.log(response); */
        return response as FavoriteGame[]; //Restituisce i valori
      })
    );;
  }

  //Chiamata API per le squadre preferite
  getFavoriteTeam(): Observable<FavoriteTeam[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
  // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<FavoriteTeam[]>(this.baseUrl + 'fav/get/team', formData).pipe(
      map((response: any) => {
        /* console.log(response); */
        return response as FavoriteTeam[]; //Restituisce i valori
      })
    );;
  }

  //Chiamata API per i giocatori preferiti
  getFavoritePlayer(): Observable<FavoritePlayer[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
  // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<FavoritePlayer[]>(this.baseUrl + 'fav/get/player', formData).pipe(
      map((response: any) => {
        /* console.log('Questa',  response); */
        return response as FavoritePlayer[]; //Restituisce i valori
      })
    );;
  };

  //Chiamata API per aggiungere rimuovere i game 
  async addFavoriteGame(id:number) {
    const formData = {
      token: localStorage.getItem('token'), // Estrae il token dall'archivio locale
      idGame: id, // id del game da aggiungere ai preferiti
    };
    // Esegue una richiesta post all'API per aggiungere il gioco ai preferiti
    fetch(this.baseUrl + 'fav/new/game', {
      method: 'POST', // Metodo della richiesta http
      headers: {
        'Content-Type': 'application/json', // Tipo di contenuto della richiesta
      },
      body: JSON.stringify(formData),  // Converte l'oggetto formData in una stringa json e lo invia come corpo della richiesta
      mode: 'cors',
    })
    .then((response) => {
      /* console.log('Aggiunto:', response); */ // Stampa nella console il risultato della richiesta (utile per un controllo)
    })
  }

  ////Chiamata API per aggiungere e rimuove le squadre 
  async addFavoriteTeam(teamName:string) {
    const formData = {
      token: localStorage.getItem('token'), // Estrae il token dall'archivio locale
      nameTeam: teamName, // nome del team da aggiungere ai preferiti
    };
    // Esegue una richiesta post all'API per aggiungere il team ai preferiti
    fetch(this.baseUrl + 'fav/new/team', {
      method: 'POST', // Metodo della richiesta http
      headers: {
        'Content-Type': 'application/json',// Tipo di contenuto della richiesta
      },
      body: JSON.stringify(formData),// Converte l'oggetto formData in una stringa json e lo invia come corpo della richiesta
    })
    .then((response) => {
      /* console.log('Aggiunto:', response); */// Stampa nella console il risultato della richiesta (utile per un controllo)
    })
  }

  ////Chiamata API per aggiungere e rimuove i giocatori 
  async addFavoritePlayer(id:number) {
    const formData = {
      token: localStorage.getItem('token'), // Estrae il token dall'archivio locale
      idPlayer: id, // id del player da aggiungere ai preferiti
    };
    // Esegue una richiesta post all'API per aggiungere il player ai preferiti
    fetch(this.baseUrl + 'fav/new/player', {
      method: 'POST', // Metodo della richiesta http
      headers: {
        'Content-Type': 'application/json',// Tipo di contenuto della richiesta
      },
      body: JSON.stringify(formData),// Converte l'oggetto formData in una stringa json e lo invia come corpo della richiesta
    })
      .then((response) => {
        /* console.log('Aggiunto:', response); */// Stampa nella console il risultato della richiesta (utile per un controllo)
      })
  }

  //Chiamata API per la lista dei game preferiti
  getListFavoriteGames(): Observable<ListFavGame[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
    // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<ListFavGame[]>(this.baseUrl + 'fav/get/idGame', formData).pipe(
      map((response: any) => {
/*         console.log('Game',response); */
        return response as ListFavGame[]; //Restituisce i valori
      })
    );;
  }

  //Chiamata API per la lista dei game preferiti
  getListFavoriteTeams(): Observable<ListFavTeam[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
    // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<ListFavTeam[]>(this.baseUrl + 'fav/get/idTeam', formData).pipe(
      map((response: any) => {
/*         console.log('Team',response); */
        return response as ListFavTeam[]; //Restituisce i valori
      })
    );;
  }
  
  //Chiamata API per la lista dei game preferiti
  getListFavoritePlayers(): Observable<ListFavPlayer[]> {
    const formData = {
      token: localStorage.getItem('token') // Estrae il token dall'archivio locale
    };
    // Esegue una richiesta all'API per prendere la lista preferiti
    return this.http.post<ListFavPlayer[]>(this.baseUrl + 'fav/get/idPlayer', formData).pipe(
      map((response: any) => {
        /* console.log('Player',response); */
        return response as ListFavPlayer[]; //Restituisce i valori
      })
    );;
  }

}