import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import Ranking from 'src/app/_models/ranking.model';
@Component({
  selector: 'app-est-page',
  templateUrl: './est-page.component.html',
  styleUrls: ['./est-page.component.scss'],
})
export class EstPageComponent implements OnInit {
  listsRanking: Ranking[] = [];
  nome: any[] = [];
  currentDate: Date = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRankingEast().subscribe((response: any) => {
      // console.log(response);
      this.listsRanking = response;
    });
  }
}
