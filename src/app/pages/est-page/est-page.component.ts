import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';

@Component({
  selector: 'app-est-page',
  templateUrl: './est-page.component.html',
  styleUrls: ['./est-page.component.scss'],
})
export class EstPageComponent implements OnInit {
  res: Ranking[] = [];
  nome: any[] = [];
  currentDate: Date = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRanking().subscribe((response: any) => {
      console.log(response);
      this.res = response;
    });
  }
}
