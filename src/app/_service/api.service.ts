import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

// Model
import Game from '../_models/game.model';
import GameDetail from '../_models/gameDetail.model';
import Player from '../_models/player.model';
import Ranking from '../_models/ranking.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8045/';

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
  getTeam(idGame: string) {
    return this.http.get(this.baseUrl + 'game/stats/' + idGame).pipe(
      map((response: any) => {
        console.log(response);
        return response as GameDetail[];
      })
    );
  }
  //Utilizzata in Risultati
  getTeamTest() {
    return this.http.get(this.baseUrl + 'game/stats/' + 10600).pipe(
      map((response: any) => {
        console.log(response);
        return response as GameDetail[];
      })
    );
  }
  //Utilizzata in Risultati
  getGiocatoriSquadraTest() {
    return this.http.get(this.baseUrl + 'team/season/' + 8 + '/' + 8).pipe(
      map((response: any) => {
        console.log(response);
        return response as Player[];
      })
    );
  }
  getRankingEast() {
    return this.http
      .get(this.baseUrl + 'team/classifica/' + 2022 + '/' + 'east')
      .pipe(
        map((response: any) => {
          console.log(response);
          return response as Ranking;
        })
      );
  }
}
