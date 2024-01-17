import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
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

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  //teams: Team[] = [];
  //Provvisorio
  teams: Team[] = [];
  players: Player[] = [];
  prevoiusGame: Game[] = [];
  nextGame: Game[] = [];

  teamName: string = '';

  // idTeam: number = 0;

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
      this.apiService.getPreviousGame(8).subscribe( (response) => {
        this.prevoiusGame = response;
      });
      this.isLoadedGame = true;
    }
  }

  isLoadedNext:boolean = false;

  loadNextGame(){
    if(!this.isLoadedNext){
      this.apiService.getNextGame(8).subscribe( (response) => {
        this.nextGame = response;
      });
      this.isLoadedNext = true;
    }
  }

  isLoadedPlayer:boolean = false;

  loadPlayers(){
    if(!this.isLoadedPlayer){
      this.apiService.getGiocatoriSquadra(8,2022).subscribe( (response) => {
        this.players = response;
      });
      this.isLoadedPlayer = true;
    }
  }

  favorite: boolean = false;

  setFavorite(){
    console.log('funge')
    this.favorite = !this.favorite;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.teamName = params['teamName'];

      // this.idTeam = this.teams[0].idTeam //recupera l'id del team da usare per le altre chiamate
      this.apiService.getThisTeam(8).subscribe( (response) => {
        this.teams = response;
      });
    })
  }

}
