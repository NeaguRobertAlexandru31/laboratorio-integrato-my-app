import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';
import Team  from '../_models/team.model'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchedTitle: string | null = '';
  teams: Team[] = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.searchedTitle = params.get('title');

      this.apiService
        .getAll()
        .subscribe((response: any) => {
          this.teams = response;
          console.log(this.teams);
        });
    });
  }

}
