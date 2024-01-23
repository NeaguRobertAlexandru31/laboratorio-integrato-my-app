import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

// Model
import Game from '../_models/game.model';
import GameDetail from '../_models/gameDetail.model';

import Player from '../_models/player.model';

import Team from '../_models/team.model';
import TeamStats from '../_models/team.model';

import Ranking from '../_models/ranking.model';
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
  //Search bar - Squadre 
  getAllTeams() {
    return this.http.get(this.baseUrl + 'team/all').pipe(
      map((response: any) => {
        // console.log(response); //Log di controllo tramite console
        return response as Team[];
      })
    );
  }
  //Search bar - Giocatori
  getAllPlayer() {
    return this.http.get(this.baseUrl + 'player/all ').pipe(
      map((response: any) => {
        // console.log(response); //Log di controllo tramite console
        return response as Game[];
      })
    );
  }

  //Utilizzata in Risultati
  getGames(date: string) {
    return this.http.get(this.baseUrl + 'home/gameday/' + date).pipe(
      map((response: any) => {
        // console.log(response); //Log di controllo tramite console
        return response as Game[];
      })
    );
  }

  //Utilizzata in Partita-Detail -
  getPartita(idGame: string) {
    return this.http.get(this.baseUrl + 'game/stats/' + idGame).pipe(
      map((response: any) => {
        console.log(response); //Log di controllo tramite console
        return response as GameDetail[];
      })
    );
  }
    
  //Utilizzata in Squadra - carica i giocatori di una squadra
  getGiocatoriSquadra(team: number, season: number) {
    return this.http
      .get(this.baseUrl + 'team/season/' + team + '/' + season)
      .pipe(
        map((response: any) => {
          console.log(response); //Log di controllo tramite console
          return response as Player[];
        })
      );
  }
  
  //Utilizzata in Squadra - carica il team in un array
  getThisTeam(teamName:string){
    return this.http
      .get(this.baseUrl + 'team/teamById/' + teamName)
      .pipe(
        map((response: any) => {
          console.log(response); //Log di controllo tramite console
          return response as Team[];
        })
      );
  }
    
  
  //Utilizzata in Squadra - carica le statistiche stagionali del team
  getThisTeamStats(idTeam:number, season:number){
    return this.http
      .get(this.baseUrl + 'team/season/stats/' + idTeam + '/' + season)
      .pipe(
        map((response: any) => {
          console.log(response); //Log di controllo tramite console
          return response as TeamStats[];
        })
      );
  }
    
  //Utilizzata in Squadra - carica le partite precedentemente giocate
  getPreviousGame(idTeam:number){
    return this.http
      .get(this.baseUrl + 'game/team/pass/' + idTeam)
      .pipe(
        map((response: any) => {
          console.log(response); //Log di controllo tramite console
          return response as Game[];
        })
      );
  }

  //Utilizzata in Squadra - carica le partite programmate
  getNextGame(idTeam:number){
    return this.http
      .get(this.baseUrl + 'game/team/prog/' + idTeam)
      .pipe(
        map((response: any) => {
          //console.log(response); //Log di controllo tramite console
          return response as Game[];
        })
      );
  }

  //Utilizzata in Classifiche Est
  getRankingEast() {
    return this.http
      .get(this.baseUrl + 'team/classifica/' + 2022 + '/' + 'east')
      .pipe(
        map((response: any) => {
          //console.log(response); //Log di controllo tramite console
          return response as Ranking;
        })
      );
  }
  
  //Utilizzata in Classifiche Ovest
  getRankingOvest() {
    return this.http
      .get(this.baseUrl + 'team/classifica/' + 2022 + '/' + 'west')
      .pipe(
        map((response: any) => {
          //console.log(response); //Log di controllo tramite console
          return response as Ranking;
        })
      );
  }
}
