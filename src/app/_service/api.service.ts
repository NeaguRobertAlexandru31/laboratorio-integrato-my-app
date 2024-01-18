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
  search(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
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
  getPartita(idGame: string) {
    return this.http.get(this.baseUrl + 'game/stats/' + idGame).pipe(
      map((response: any) => {
        console.log(response);
        return response as GameDetail[];
      })
    );
  }

  //Utilizzata in Classifiche Est
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
  //Utilizzata in Classifiche Est
  getRankingOvest() {
    return this.http
      .get(this.baseUrl + 'team/classifica/' + 2022 + '/' + 'west')
      .pipe(
        map((response: any) => {
          console.log(response);
          return response as Ranking;
        })
      );
  }
}
