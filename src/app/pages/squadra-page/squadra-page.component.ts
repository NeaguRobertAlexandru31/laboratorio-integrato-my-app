import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

import Team from '../../_models/team.model';
import Player from 'src/app/_models/player.model';
import GameDetail from 'src/app/_models/gameDetail.model';

@Component({
  selector: 'squadra-page',
  templateUrl: './squadra-page.component.html',
  styleUrls: ['./squadra-page.component.scss']
})
export class SquadraPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  //teams: Team[] = [];
  //Provvisorio
  teams: GameDetail[] = [];
  players: Player[] = [];

  idSquadra: string = '';

  sectionPanoramica: boolean = false; //impostare come primo
  sectionPartite: boolean = false;
  sectionGiocatori: boolean = true;

  stylePanoramica:string = '';
  stylePartite:string = '';
  styleGiocatori:string = '';

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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.idSquadra = params['idSquadra'];

      this.apiService.getGiocatoriSquadra(8,2022).subscribe( (response) => {
        this.players = response;
      });

      //Porvvisoria
      this.apiService.getPartitaTest().subscribe( (response) => {
        this.teams = response;
      });
    })
  }

}
