import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// File Per Chiamata APi
import { ApiService } from '../../_service/api.service';
//Models
import PlayerStat from 'src/app/_models/playerDetail.model';
import PlayerPan from 'src/app/_models/playerPan.model';
import Team from 'src/app/_models/team.model';


@Component({
  selector: 'player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute){  }

  playerStat: PlayerStat[] = []; 
  playerPan: PlayerPan[] = []; 

  idPlayer: number = 0;

  sectionPanoramica: boolean = true; //impostare come primo
  sectionStat: boolean = false;
  
  //Funzione per cambiare tra i due bottoni
  accordionPan(section:string,) {
    if(section == 'stat'){
      this.sectionPanoramica = false;
      this.sectionStat = true;
      
    } else if(section == 'panoramica'){
      this.sectionPanoramica = true;
      this.sectionStat = false;
    } 
  }


  favorite: boolean = false;
  teamName: string = "";
  teams: Team[] = [];
  setFavorite(){
    this.favorite = !this.favorite;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      //prendo dal router idPlayer 
      this.idPlayer = params['idPlayer'];
    })
    console.log('idPlayer:'+this.idPlayer)
    this.apiService.getPlayerStat(this.idPlayer).subscribe((response:any)=>{
      this.playerStat = response;
      console.log(this.playerStat)
    })
  }

}
