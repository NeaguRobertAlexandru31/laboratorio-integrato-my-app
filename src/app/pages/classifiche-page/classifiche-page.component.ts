import { Component } from '@angular/core';

@Component({
  selector: 'app-classifiche-page',
  templateUrl: './classifiche-page.component.html',
  styleUrls: ['./classifiche-page.component.scss']
})
export class ClassifichePageComponent{

  constructor(){}
  
  classificaOvest: boolean = true;
  classificaEst: boolean = false;

  selectorClassifica(page: string) {
    if (page == 'ovest') {
      this.classificaOvest = true;
      this.classificaEst = false;
    }
    if (page == 'est') {
      this.classificaOvest = false;
      this.classificaEst = true;
    }
  }
}
