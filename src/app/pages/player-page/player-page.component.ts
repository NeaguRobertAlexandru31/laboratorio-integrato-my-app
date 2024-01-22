import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// File Per Chiamata APi
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
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

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute,private favoriteApiService: FavoriteApiService){  }

  playerStat: PlayerStat[] = []; 
  playerPan: PlayerPan[] = []; 

  idPlayer: number = 0;

  sectionPanoramica: boolean = true; //impostare come primo
  sectionStat: boolean = false;
  
  //Funzione per cambiare tra i due bottoni
  accordionPan(section:string) {
    if(section == 'stat'){
      this.sectionPanoramica = false;
      this.sectionStat = true;
      
    } else if(section == 'panoramica'){
      this.sectionPanoramica = true;
      this.sectionStat = false;
    } 
  }

 
  teamName: string = "";
  teams: Team[] = [];
  
  setFavoriteTeam(nameTeam:string){
        this.favoriteApiService.addFavoriteTeam(nameTeam);
  }
  //modifica il risultato dell'api e lo rende da float a int
  modifyAvgMinuts(){
    this.playerStat.forEach((stat)=>{
      stat.avgMinutes = Math.floor(stat.avgMinutes);
    })
  }
  playerInfo:[]=[]
  // prendo le informazioni dal localStorage(Img Giocatore,Nome,Cognome,Colore squadra)
  getInfoLocalStorage(){
    // this.playerInfo = localStorage.getItem('object');
  }
  ngOnInit(): void {
    // prendo dal router idPlayer 
    this.activatedRoute.params.subscribe((params) => {
      this.idPlayer = params['idPlayer'];
    })
    // prendo le Statische del player
    this.apiService.getPlayerStat(this.idPlayer).subscribe((response:any)=>{
      this.playerStat = response;
      // modifico il valore di avgMinuts perchè mi serve in int 
      this.modifyAvgMinuts();
    })
    // prendo la Panoramica del player
    this.apiService.getPlayerPan(this.idPlayer).subscribe((response:any)=>{
      this.playerPan = response;
      // console.log(this.playerPan);
    })
  }

}
