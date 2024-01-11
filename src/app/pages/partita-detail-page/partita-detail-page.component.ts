import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

import GameDetail from '../../_models/gameDetail.model';

@Component({
  selector: 'app-partita-detail-page',
  templateUrl: './partita-detail-page.component.html',
  styleUrls: ['./partita-detail-page.component.scss']
})
export class PartitaDetailPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  partite: GameDetail[] = [];

  idGame: string = '';

  toNumber(a:string,b:string){
    let primo:string = a;
    let secondo:string = b;
    let c:number = Number(primo + secondo)
    return c;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.idGame = params['idGame'];

      // this.apiService.getTeam(this.idGame).subscribe( (response) => {
      //   this.squadra = response;
      // });
      this.apiService.getPartitaTest().subscribe( (response) => {
        this.partite = response;
      });
    })
  }

}
