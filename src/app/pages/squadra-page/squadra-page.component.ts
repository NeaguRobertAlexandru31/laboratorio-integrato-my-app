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

  idSquadra: string = '';

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

  getGradient(game: Game): string {
    if (game.homeColour === null) {
      return `linear-gradient(to right, #ffffff, ${game.visitorsColour}B3)`;
    } else if (game.visitorsColour === null) {
      return `linear-gradient(to right, ${game.homeColour}B3, #ffffff)`;
    } else if (game.homeColour === null && game.visitorsColour === null) {
      return `linear-gradient(to right, 808080B3, #ffffff)`;
    }
    return `linear-gradient(to right, ${game.homeColour}B3, ${game.visitorsColour}B3)`;
  }

  favorite: boolean = false;

  setFavorite(){
    console.log('funge')
    this.favorite = !this.favorite;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.idSquadra = params['idSquadra'];

      this.apiService.getGiocatoriSquadra(8,2022).subscribe( (response) => {
        this.players = response;
      });
      this.apiService.getPreviousGame(8).subscribe( (response) => {
        this.prevoiusGame = response;
      });
      this.apiService.getNextGame(8).subscribe( (response) => {
        this.nextGame = response;
      });
      this.apiService.getThisTeam(8).subscribe( (response) => {
        this.teams = response;
      });
    })
  }

}
