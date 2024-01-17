import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

// Model
import Game from '../_models/game.model';
import GameDetail from '../_models/gameDetail.model';
import Player from '../_models/player.model';
import Team from '../_models/team.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  search(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:8045/';
  //baseUrl = 'http://hoopsdata.ddns.net:8045/';

  constructor(private http: HttpClient) {}
  //Inutilizzata
  getAll() {
    return this.http.get(this.baseUrl + 'team/all').pipe(
      map((response: any) => {
        console.log(response);
        return response as Game[];
      })
    );
  }
  //Utilizzata in Risultati
  getGames(date: string) {
    return this.http.get(this.baseUrl + 'home/gameday/' + date).pipe(
      map((response: any) => {
        console.log(response);
        return response as Game[];
      })
    );
  }
  //Utilizzata in Partita-Detail
  getPartita(idGame: string) {
    return this.http.get(this.baseUrl + 'game/stats/' + idGame).pipe(
      map((response: any) => {
        console.log(response);
        return response as GameDetail[];
      })
    );
  }
  //Utilizzata in Risultati
  getPartitaTest() {
    return this.http.get(this.baseUrl + 'game/stats/' + 12216).pipe(
      map((response: any) => {
        console.log(response);
        return response as GameDetail[];
      })
    );
  }
  
  
  //Chiamata non funzionante ne collegata
  getFavoriteTeam(idTeam:number){
    return this.http
    .get(this.baseUrl + 'fav/new/team/' + idTeam)
    .pipe(
      map((response: any) => {
        console.log(response);
        return response as Player[];
      })
      );
    }
    
    //Funzionante
    getGiocatoriSquadra(team: number, season: number) {
      return this.http
        .get(this.baseUrl + 'team/season/' + team + '/' + season)
        .pipe(
          map((response: any) => {
            console.log(response);
            return response as Player[];
          })
        );
    }
    
  //Chiamata non funzionante ne collegata
  getThisTeam(idTeam:number){
    return this.http
      .get(this.baseUrl + 'team/teamById/' + idTeam)
      .pipe(
        map((response: any) => {
          console.log(response);
          return response as Team[];
        })
      );
  }
    
  //Chiamata non funzionante ne collegata
  getPreviousGame(idTeam:number){
    return this.http
      .get(this.baseUrl + 'game/team/pass/' + idTeam)
      .pipe(
        map((response: any) => {
          console.log(response);
          return response as Game[];
        })
      );
  }

  //Chiamata non funzionante ne collegata
  getNextGame(idTeam:number){
    return this.http
      .get(this.baseUrl + 'game/team/prog/' + idTeam)
      .pipe(
        map((response: any) => {
          console.log(response);
          return response as Game[];
        })
      );
  }
}