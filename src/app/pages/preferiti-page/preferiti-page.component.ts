import { Component } from '@angular/core';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrls: ['./preferiti-page.component.scss']
})
export class PreferitiPageComponent {

  constructor(){}

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

}