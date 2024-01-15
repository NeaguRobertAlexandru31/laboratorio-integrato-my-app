import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partite-page',
  templateUrl: './partite-page.component.html',
  styleUrls: ['./partite-page.component.scss'],
})
export class PartitePageComponent implements OnInit {
  constructor() {}

  sectionResult: boolean = true;
  sectionProgram: boolean = false;

  selectorPage(page: string) {
    if (page == 'risultati') {
      this.sectionResult = true;
      this.sectionProgram = false;
    }
    if (page == 'programmate') {
      this.sectionResult = false;
      this.sectionProgram = true;
    }
  }

  ngOnInit(): void {
    this.selectorPage('risultati');
  }

}
