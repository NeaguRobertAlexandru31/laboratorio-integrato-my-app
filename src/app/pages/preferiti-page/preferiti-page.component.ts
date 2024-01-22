import { Component, OnInit } from '@angular/core';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

import FavoriteTeam from 'src/app/_models/favorite.model';
import FavoritePlayer from 'src/app/_models/favorite.model';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss']
})
export class PreferitiPageComponent implements OnInit {

  favoriteTeams: FavoriteTeam[] = []
  favoritePlayers: FavoritePlayer[] = []

  constructor(private apiService: FavoriteApiService) {}

  token:string = '';

  tokenVerify: boolean = false;

  // accordionPartite:boolean = true;
  accordionSquadre:boolean = true;
  accordionGiocatori:boolean = false;

  accordionFavorite(section:string,) {
    if(section == 'squadre'){
      //this.accordionPartite = false;
      this.accordionSquadre = true;
      this.accordionGiocatori = false;
    } else if(section == 'giocatori'){
      //this.accordionPartite = false;
      this.accordionSquadre = false;
      this.accordionGiocatori = true;
    } //else if(section == 'partite'){
      //   this.accordionPartite = true;
      //   this.accordionSquadre = false;
      //   this.accordionGiocatori = false;
      // }
  }

  isLoadedPlayer:boolean = false;

  loadPlayers(){
    if(!this.isLoadedPlayer){
      this.apiService.getFavoritePlayer().subscribe((response: FavoritePlayer[]) => {
        this.favoritePlayers = response;
      }
    );
      };
      this.isLoadedPlayer = true;
    }

  ngOnInit(){

    if(localStorage.getItem('token')?.length){
      this.tokenVerify = true;
    }

    this.apiService.getFavoriteTeam().subscribe((response: FavoriteTeam[]) => {
        this.favoriteTeams = response;
      }
    );

  }

}