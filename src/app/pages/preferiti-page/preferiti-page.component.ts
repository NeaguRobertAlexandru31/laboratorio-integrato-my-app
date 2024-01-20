import { Component, OnInit } from '@angular/core';
import FavoriteTeam from 'src/app/_models/favorite.model';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss']
})
export class PreferitiPageComponent implements OnInit {

  favoriteTeam: FavoriteTeam[] = []

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
      this.apiService.getFavoritePlayer()
      };
      this.isLoadedPlayer = true;
    }

  ngOnInit(){

    this.apiService.getFavoriteTeam().then((favoriteTeam: FavoriteTeam) => {
      this.favoriteTeam =  // Puoi fare qualcosa con il valore restituito
    });

    // this.apiService.getFavoriteTeam().subscribe( (response: FavoriteTeam[]) => {
    //   this.favoriteTeam = response;
    // });

  }

}