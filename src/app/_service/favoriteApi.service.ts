import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs';

import FavoriteTeam from '../_models/favorite.model';
import FavoritePlayer from '../_models/favorite.model';

// Model

@Injectable({
  providedIn: 'root',
})
export class FavoriteApiService {
  
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8045/';
  //baseUrl = 'http://hoopsdata.ddns.net:8045/';

  tokenVerify:boolean = false;

  //Prende le squadre preferite
  getFavoriteTeam(): Observable<FavoriteTeam[]> {
    const formData = {
      token: localStorage.getItem('token')
    };
  
    return this.http.post<FavoriteTeam[]>(this.baseUrl + 'fav/get/team', formData).pipe(
      map((response: any) => {
        console.log(response);
        return response as FavoriteTeam[];
      })
    );;
  }

  //Prende i giocatori preferiti
  getFavoritePlayer(): Observable<FavoritePlayer[]> {
    const formData = {
      token: localStorage.getItem('token')
    };
  
    return this.http.post<FavoritePlayer[]>(this.baseUrl + 'fav/get/player', formData).pipe(
      map((response: any) => {
        console.log(response);
        return response as FavoritePlayer[];
      })
    );;
  };

  //Aggiunge e rimuove le squadre 
  addFavoriteTeam(teamName:string) {
    const formData = {
      token: localStorage.getItem('token'),
      nameTeam: teamName,
    };

    fetch(this.baseUrl + 'fav/new/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('Aggiunto:', response);
      })
  }

  //Aggiunge e rimuove i giocatori 
  addFavoritePlayer(id:number) {
    const formData = {
      token: localStorage.getItem('token'),
      idPlayer: id,
    };

    fetch(this.baseUrl + 'fav/new/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('Aggiunto:', response);
      })
  }
}