import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
  getFavoriteTeam(): Promise<FavoriteTeam> {
    const formData = {
      token: sessionStorage.getItem('token')
    };

    return fetch(this.baseUrl + 'fav/get/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response: FavoriteTeam) => {
        return response;
      });
  }

  getFavoritePlayer():any {
    const formData = {
      token: sessionStorage.getItem('token')
    };

    fetch(this.baseUrl + 'fav/get/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response:FavoritePlayer) => {
        console.log('Accesso avvenuto con successo:', response);
      })
  }

  //Aggiunge e rimuove l'oggetto 
  addFavoriteTeam(teamName:string) {
    const formData = {
      token: sessionStorage.getItem('token'),
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
        // Puoi aggiungere qui il reindirizzamento o altre azioni dopo l'accesso.
      })
  }
  //Aggiunge e rimuove l'oggetto 
  addFavoritePlayer(id:number) {
    const formData = {
      token: sessionStorage.getItem('token'),
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
        // Puoi aggiungere qui il reindirizzamento o altre azioni dopo l'accesso.
      })
  }
}