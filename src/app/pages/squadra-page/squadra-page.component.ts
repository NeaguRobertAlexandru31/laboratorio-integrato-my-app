import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
import { ActivatedRoute } from '@angular/router';

import Team from '../../_models/team.model';
import Player from 'src/app/_models/player.model';

import Game from 'src/app/_models/game.model';

@Component({
  selector: 'squadra-page',
  templateUrl: './squadra-page.component.html',
  styleUrls: ['./squadra-page.component.scss']
})
export class SquadraPageComponent implements OnInit{

  constructor(private apiService: ApiService, private favoriteApiService: FavoriteApiService , private activatedRoute: ActivatedRoute){  }

  teams: Team[] = [];
  players: Player[] = [];
  prevoiusGame: Game[] = [];
  nextGame: Game[] = [];

  teamName: string = '';

  idTeam: number = 0;

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

  isLoadedGame:boolean = false;

  loadPreviousGame(){
    if(!this.isLoadedGame){
      this.apiService.getPreviousGame(this.idTeam).subscribe( (response) => {
        this.prevoiusGame = response;
      });
      this.isLoadedGame = true;
    }
  }

  isLoadedNext:boolean = false;

  loadNextGame(){
    if(!this.isLoadedNext){
      this.apiService.getNextGame(this.idTeam).subscribe( (response) => {
        this.nextGame = response;
      });
      this.isLoadedNext = true;
    }
  }

  isLoadedPlayer:boolean = false;

  loadPlayers(){
    if(!this.isLoadedPlayer){
      this.apiService.getGiocatoriSquadra(this.idTeam,2023).subscribe( (response) => {
        this.players = response;
      });
      this.isLoadedPlayer = true;
    }
  }

  favorite: boolean = false;

  setFavoriteTeam(nameTeam:string){
    this.favoriteApiService.addFavoriteTeam(nameTeam)
  }
  setFavoritePlayer(id:number){
    this.favoriteApiService.addFavoritePlayer(id)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.teamName = params['teamName'];

      this.accordionTeam('panoramica');
      this.accordionGame('risultati');

      this.nextGame.splice(0, this.nextGame.length);
      this.prevoiusGame.splice(0, this.prevoiusGame.length);
      this.players.splice(0, this.players.length);

      this.isLoadedGame = false;
      this.isLoadedPlayer = false;
      this.isLoadedNext = false;

      this.apiService.getThisTeam(this.teamName).subscribe( (response) => {
        this.teams = response;
        this.idTeam = this.teams[0].idTeam
      });
    })
  }

}
