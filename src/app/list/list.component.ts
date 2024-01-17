import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ShowSearch } from '../_models/show.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchedTitle: string | null = '';
  shows: ShowSearch[] = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.searchedTitle = params.get('title');

      this.apiService
        .searchShow(this.searchedTitle ? this.searchedTitle : '')
        .subscribe((response: any) => {
          this.shows = response;
          console.log(this.shows);
        });
    });
  }

  replaceSpaceBetweenWords(words: string) {
    let newWords = words
      .toLowerCase()
      .replace(/[ ,\.]/g, '-')
      .replace(/:/g, '');
    return newWords;
  }
}
