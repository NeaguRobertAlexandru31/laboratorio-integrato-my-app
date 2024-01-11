import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Chiama API
import { ApiService } from '../_service/api.service';
import Game from '../_models/game.model';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
handleDateChange($event: DateTime<boolean>) {
throw new Error('Method not implemented.');
}
  games: Game[] = [];
  squadre: any[] = [];

  currentDate: Date = new Date;

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

  ngOnInit(){
    // console.log(this.formatDate());
    this.apiService.getGames('2022-10-20').subscribe( (response) => {
      this.games = response;
    });
    this.apiService.getTeamTest().subscribe( (response) => {
      this.squadre = response;
    });
  }

  onDateChange(selectedDate: Date): void {
    this.currentDate = selectedDate;
  }

  
}
