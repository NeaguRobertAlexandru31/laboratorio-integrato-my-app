import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

import GameDetail from '../../_models/gameDetail.model';

@Component({
  selector: 'app-partita-detail-page',
  templateUrl: './partita-detail-page.component.html',
  styleUrls: ['./partita-detail-page.component.scss']
})
export class PartitaDetailPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  partite: GameDetail[] = [];

  idGame: string = '';
  // homeTeamName: string = '';
  // visitorTeamName: string = '';

  toNumber(a:string,b:string){
    let primo:string = a;
    let secondo:string = b;
    let c:number = Number(primo + secondo)
    return c;
  }

  isVisible = false;

  openStats() {
    this.isVisible = !this.isVisible;
  }

  // getGradient(game: GameDetail): string {
  //   if (game.homeColour === null) {
  //     return `linear-gradient(to right, #ffffff, #${game.visitorsColour}B3)`;
  //   } else if (game.visitorsColour === null) {
  //     return `linear-gradient(to right, #${game.homeColour}B3, #ffffff)`;
  //   } else if (game.homeColour === null && game.visitorsColour === null) {
  //     return `linear-gradient(to right, #808080B3, #ffffff)`;
  //   }
  //   return `linear-gradient(to right, #${game.homeColour}B3, #${game.visitorsColour}B3)`;
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.idGame = params['idGame'];

      //Chiamata di test
      this.apiService.getPartitaTest().subscribe( (response) => {
        this.partite = response;
      });
      //Chiamata per partita specifica
      // this.apiService.getPartita(this.idGame).subscribe( (response) => {
      //   this.partite = response;
      // });
    })
  }

}
