import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Chiama API
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
  games: any[] = [];
  currentDate: Date = new Date;

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getAll().subscribe( (response) => { //esegue la chiamata a getMeteo
      this.games = response;
    });
  }

  onDateChange(selectedDate: Date): void {
    this.currentDate = selectedDate;
  }

  
}
