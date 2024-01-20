import { Component, OnInit } from '@angular/core';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss']
})
export class PreferitiPageComponent implements OnInit {

  favoriteTeam: any[] = []

  constructor(private apiService: FavoriteApiService) {}

  token:string = '';

  tokenVerify: boolean = false;

  accordionPartite:boolean = true;
  accordionSquadre:boolean = false;
  accordionGiocatori:boolean = false;

  accordionFavorite(section:string,) {
    if(section == 'partite'){
      this.accordionPartite = true;
      this.accordionSquadre = false;
      this.accordionGiocatori = false;
    } else if(section == 'squadre'){
      this.accordionPartite = false;
      this.accordionSquadre = true;
      this.accordionGiocatori = false;
    } else if(section == 'giocatori'){
      this.accordionPartite = false;
      this.accordionSquadre = false;
      this.accordionGiocatori = true;
    }
  }

  ngOnInit(){
    
    this.apiService.getFavoriteTeam();

  }

}