import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
import { ActivatedRoute } from '@angular/router';

import Team from '../../_models/team.model';
import TeamStats from '../../_models/team.model';
import Player from 'src/app/_models/player.model';
import Game from 'src/app/_models/game.model';

@Component({
  selector: 'squadra-page',
  templateUrl: './squadra-page.component.html',
  styleUrls: ['./squadra-page.component.scss']
})
export class SquadraPageComponent implements OnInit{

  constructor(private apiService: ApiService, private favoriteApiService: FavoriteApiService, private activatedRoute: ActivatedRoute){  }

  teams: Team[] = [];
  teamStats: TeamStats[] = [];
  players: Player[] = [];
  prevoiusGame: Game[] = [];
  nextGame: Game[] = [];

  teamName: string = '';

  idTeam: number = 0;

  year:number = (new Date().getFullYear())-1

  sectionPanoramica: boolean = true; //impostare come primo
  sectionPartite: boolean = false;
  sectionGiocatori: boolean = false;

  accordionTeam(section:string,) {
    if(section == 'panoramica'){
      this.sectionPanoramica = true;
      this.sectionPartite = false;
      this.sectionGiocatori = false;
    } else if(section == 'partite'){
      this.sectionPanoramica = false;
      this.sectionPartite = true;
      this.sectionGiocatori = false;
    } else if(section == 'giocatori'){
      this.sectionPanoramica = false;
      this.sectionPartite = false;
      this.sectionGiocatori = true;
    }
  }

  sectionRisultati: boolean = true;
  sectionProgrammate: boolean = false;

  accordionGame(section:string){
    if(section == 'risultati'){
      this.sectionRisultati = true;
      this.sectionProgrammate = false;
    } else if(section == 'programmate'){
      this.sectionRisultati = false;
      this.sectionProgrammate = true;
    }
  }

  isVisible = false;

  openStats() {
    this.isVisible = !this.isVisible;
  }

  //Gestione dei Favorite
  favorite: boolean = false;
  //Aggiunge e Rimuove i Team preferiti
  setFavoriteTeam(nameTeam:string){
    this.favoriteApiService.addFavoriteTeam(nameTeam)
  }
  //Aggiunge e Rimuove i Giocatori preferiti
  setFavoritePlayer(id:number){
    this.favoriteApiService.addFavoritePlayer(id)
  }

  //Team
  isLoadingTeam: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeam(teamName: string) {
    this.apiService.getThisTeam(teamName).subscribe({
      next: (response:Team[]) => {
        this.teams = response;
        this.idTeam = this.teams[0].idTeam;
        this.loadingTeamStats(this.idTeam); //Chiamata API statistiche stagionali squadra
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //TeamStatiscs
  isLoadingTeamStats: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeamStats(idTeam: number) {
    this.apiService.getThisTeamStats(idTeam,this.year).subscribe({
      next: (response:any[]) => {
        this.teamStats = response;
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //PreviousGame
  isLoadingPreviousGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedPrevoius:boolean = false; // Flag per indicare se l'array e gia stato caricato
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingPreviousGame(idTeam: number) {
    if(this.isLoadedPrevoius == false){
    this.apiService.getPreviousGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.prevoiusGame = response;
      },
      error: (error) => console.error('Error fetching prevoius game', error),
      complete: () => {
        return this.isLoadingPreviousGame = false, this.isLoadedPrevoius = true;
      }
    });
  }
  }

  //NextGame
  isLoadingNextGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedNext:boolean = false; // Flag per indicare se l'array e gia stato caricato
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  loadingNextGame(idTeam: number) {
    if(this.isLoadedNext == false){
    this.apiService.getNextGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.nextGame = response;
      },
      error: (error) => console.error('Error fetching next game', error),
      complete: () => {return this.isLoadingNextGame = false, this.isLoadedNext = true}
    });
  }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedPlayer:boolean = false;
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  loadingPlayers(teamId: number) {
    if(this.isLoadedPlayer == false){
    this.apiService.getGiocatoriSquadra(teamId,2023).subscribe({
      next: (response:Player[]) => {
        this.players = response;
      },
      error: (error) => console.error('Error fetching players', error),
      complete: () => {return this.isLoadingPlayers = false, this.isLoadedPlayer = true}
    });
  }
  }

  //Calcola la media di due valori di tipo number
  calculateRoundedAverage(aNumber:number, bMedia:number){
    return Math.round(aNumber / bMedia);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.teamName = params['teamName'];

      this.accordionTeam('panoramica');
      this.accordionGame('risultati');

      this.nextGame.splice(0, this.nextGame.length);
      this.prevoiusGame.splice(0, this.prevoiusGame.length);
      this.players.splice(0, this.players.length);

      this.isLoadingTeam = false;
      this.isLoadedPrevoius = false;
      this.isLoadedPlayer = false;
      this.isLoadedNext = false;

      this.loadingTeam(this.teamName); //Chiamata API squadra
    })
  }

}
