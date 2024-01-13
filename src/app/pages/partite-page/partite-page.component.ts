import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partite-page',
  templateUrl: './partite-page.component.html',
  styleUrls: ['./partite-page.component.scss'],
})
export class PartitePageComponent implements OnInit {
  constructor() {}

  styleResult: string = 'bg-hoops-primary text-white';
  styleProgram: string = 'bg-hoops-primary text-white';

  selectorPage(page: string) {
    if (page == 'risultati') {
      this.styleResult = 'bg-hoops-primary text-white';
      this.styleProgram = '';
    }
    if (page == 'programmate') {
      this.styleResult = '';
      this.styleProgram = 'bg-hoops-primary text-white';
    }
  }

  ngOnInit(): void {
    this.selectorPage('risultati');
  }
}
