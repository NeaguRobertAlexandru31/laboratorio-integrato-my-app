import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';

//Chiama API
import { ApiService } from '../_service/api.service';
import Game from '../_models/game.model';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
  games: Game[] = [];
  squadre: any[] = [];

  currentDate: DateTime = DateTime.now();

  // formatDate = () => {
  //   const monthList:string[] = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  //   let year = new Date().getFullYear();
  //   let month = new Date().getMonth();
  //   let day = new Date().getDate();
  //   if(day<10){
  //     day = '0' + day;
  //   }
    
  //   return "'" + year + '-' +  monthList[month] + '-' + day + "'"
  // }

  idGame: number = 0;

  constructor(private apiService: ApiService) {}

  getGradient(game: any): string {
    if(game.homeColour === null){
      return `linear-gradient(to right, #ffffff, #${game.visitorsColour})`
    }else if(game.visitorsColour === null){
      return `linear-gradient(to right, #${game.homeColour}, #ffffff)`
    }else if(game.homeColour === null && game.visitorsColour === null){
      return `linear-gradient(to right, #808080, #ffffff)`
    }
    return `linear-gradient(to right, #${game.homeColour}, #${game.visitorsColour})`;
  }

  ngOnInit(){
    // console.log(this.formatDate());
    // this.apiService.getAll().subscribe( (response) => {
    //   this.games = response;
    // });
    this.apiService.getGames(this.currentDate.toFormat('yyyy-MM-dd')).subscribe( (response) => {
      this.games = response;
    });
    // this.apiService.getTeamTest().subscribe( (response) => {
    //   this.squadre = response;
    // });
    // this.apiService.getGiocatoriSquadraTest().subscribe( (response) => {
    //   this.squadre = response;
    // });
  }
}
