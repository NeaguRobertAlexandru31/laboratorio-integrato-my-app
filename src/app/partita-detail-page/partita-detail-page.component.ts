import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partita-detail-page',
  templateUrl: './partita-detail-page.component.html',
  styleUrls: ['./partita-detail-page.component.scss']
})
export class PartitaDetailPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  squadra: any[] = [];

  idGame: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.idGame = params['idGame'];

      this.apiService.getTeam(this.idGame).subscribe( (response) => { //esegue la chiamata a getMeteo

        this.squadra = response;
      });
    })
  }

}
