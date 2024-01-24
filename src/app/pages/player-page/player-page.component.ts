import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// File Per Chiamata APi
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
//Models
import PlayerStat from 'src/app/_models/playerDetail.model';
import PlayerPan from 'src/app/_models/playerPan.model';

import FavoriteTeam from 'src/app/_models/favorite.model';
import ListFavPlayers from 'src/app/_models/favorite.model';

@Component({
  selector: 'player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit{

  constructor(private apiService: ApiService , private activatedRoute: ActivatedRoute,private favoriteApiService: FavoriteApiService){  }

  playerStat: PlayerStat[] = []; 
  playerPan: PlayerPan[] = []; 
  colorTeam:string='';
  idPlayer: number = 0;
  sectionPanoramica: boolean = true; //impostare come primo
  sectionStat: boolean = false;

  listFavPlayers: ListFavPlayers[] = [];
  
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
  
  setFavoriteTeam(nameTeam:string){
        this.favoriteApiService.addFavoriteTeam(nameTeam);
  }
  //modifica il risultato dell'api e lo rende da float a int
  modifyAvgMinuts(){
    this.playerStat.forEach((stat)=>{
      stat.avgMinutes = Math.floor(stat.avgMinutes);
    })
  }

  //In caso di future implementazioni
  // updateListPlayer() {
  //   if (localStorage.getItem('token')) {
  //   this.favoriteApiService.getListFavoritePlayers().subscribe({
  //     next: (response: ListFavPlayers[]) => {
  //       this.listFavPlayers = response;
  //     },
  //     error: (error) => console.error('Error fetching favorite players', error),
  //   });}}  

  //   // Gestisci l'aggiunta e rimozione dei player
  //   // Questa funzione utilizza dei setTimeout per mantenere una gerarchia di caricamento per non sovrapporre le chiamate che vanno eseguite una dopo l'altra
  //   setFavoritePlayer(data: number) {
  //     try {
  //       this.favoriteApiService.addFavoritePlayer(data);
  //     } finally {
  //       try {
  //         setTimeout(() => {
  //           this.updateListPlayer();
  //         },1000) // Attendiamo che updateListPlayer sia completato
  //       } finally {
  //         setTimeout(() => {
  //           location.reload()
  //         },1500)
  //       }
  //     }
  //   }

  // //Cerca l'elemento all'interno dell'array
  // isTeamInFavorites(id:number, array:FavoriteTeam[]) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].idGame === id) {
  //       return true;
  //     } else if (array[i].idTeam === id) {
  //       return true;
  //     } else if (array[i].idPlayer === id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  
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
      this.playerPan.forEach((pan:any)=>{
        this.colorTeam = pan.colour;
      })
    })
  }

}
