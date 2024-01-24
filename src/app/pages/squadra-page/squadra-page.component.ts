import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';
import { ActivatedRoute } from '@angular/router';

import Team from '../../_models/team.model';
import TeamStats from '../../_models/team.model';
import Player from 'src/app/_models/player.model';
import Game from 'src/app/_models/game.model';

import ListFavGames from 'src/app/_models/favorite.model';
import ListFavTeams from 'src/app/_models/favorite.model';
import ListFavPlayers from 'src/app/_models/favorite.model';

@Component({
  selector: 'squadra-page',
  templateUrl: './squadra-page.component.html',
  styleUrls: ['./squadra-page.component.scss']
})
export class SquadraPageComponent implements OnInit{

  constructor(private apiService: ApiService, private favoriteApiService: FavoriteApiService, private activatedRoute: ActivatedRoute){  }

  teams: Team[] = [];
  teamStats: TeamStats[] = [];
  players: Player[] = [];
  prevoiusGame: Game[] = [];
  nextGame: Game[] = [];

  listFavGames: ListFavGames[] = [];
  listFavTeams: ListFavTeams[] = [];
  listFavPlayers: ListFavPlayers[] = [];

  teamName: string = '';

  idTeam: number = 0;

  year:number = (new Date().getFullYear())-1

  sectionPanoramica: boolean = true; //impostare come primo
  sectionPartite: boolean = false;
  sectionGiocatori: boolean = false;

  accordionTeam(section:string,) {
    if(section == 'panoramica'){
      this.sectionPanoramica = true;
      this.sectionPartite = false;
      this.sectionGiocatori = false;
    } else if(section == 'partite'){
      this.sectionPanoramica = false;
      this.sectionPartite = true;
      this.sectionGiocatori = false;
    } else if(section == 'giocatori'){
      this.sectionPanoramica = false;
      this.sectionPartite = false;
      this.sectionGiocatori = true;
    }
  }

  sectionRisultati: boolean = true;
  sectionProgrammate: boolean = false;

  accordionGame(section:string){
    if(section == 'risultati'){
      this.sectionRisultati = true;
      this.sectionProgrammate = false;
    } else if(section == 'programmate'){
      this.sectionRisultati = false;
      this.sectionProgrammate = true;
    }
  }

  isVisible = false;

  openStats() {
    this.isVisible = !this.isVisible;
  }

  //Team
  isLoadingTeam: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeam(teamName: string) {
    this.apiService.getThisTeam(teamName).subscribe({
      next: (response:Team[]) => {
        this.teams = response;
        this.idTeam = this.teams[0].idTeam;
        this.loadingTeamStats(this.idTeam); //Chiamata API statistiche stagionali squadra
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //TeamStatiscs
  isLoadingTeamStats: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingTeamStats(idTeam: number) {
    this.apiService.getThisTeamStats(idTeam,this.year).subscribe({
      next: (response:any[]) => {
        this.teamStats = response;
      },
      error: (error) => console.error('Error fetching team', error),
      complete: () => this.isLoadingTeam = false
    });
  }

  //PreviousGame
  isLoadingPreviousGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedPrevoius:boolean = false; // Flag per indicare se l'array e gia stato caricato
  //Funzione di caricamento e ricevuta dei dati, controlla lo stato della chiamata se restituisce o meno
  loadingPreviousGame(idTeam: number) {
    if(this.isLoadedPrevoius == false){
    this.apiService.getPreviousGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.prevoiusGame = response;
      },
      error: (error) => console.error('Error fetching prevoius game', error),
      complete: () => {
        return this.isLoadingPreviousGame = false, this.isLoadedPrevoius = true;
      }
    });
  }
  }

  //NextGame
  isLoadingNextGame: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedNext:boolean = false; // Flag per indicare se l'array e gia stato caricato
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  loadingNextGame(idTeam: number) {
    if(this.isLoadedNext == false){
    this.apiService.getNextGame(idTeam).subscribe({
      next: (response:Game[]) => {
        this.nextGame = response;
      },
      error: (error) => console.error('Error fetching next game', error),
      complete: () => {return this.isLoadingNextGame = false, this.isLoadedNext = true}
    });
  }
  }

  //Player
  isLoadingPlayers: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  isLoadedPlayer:boolean = false;
  
  
  

  setFavoriteTeam(nameTeam:string){
    this.favoriteApiService.addFavoriteTeam(nameTeam)
  }
  setFavoritePlayer(id:number){
    this.favoriteApiService.addFavoritePlayer(id)
  }
  listsPlayer:Player[]=[];
  imgPlayer:string="";
  firstName:string="";
  lastName:string="";
  colourTeam:string="";
  saveInfoLocalStorage(selectPlayer:any){
    this.apiService.getGiocatoriSquadra(this.idTeam,2023).subscribe((response)=>{
      this.listsPlayer = response;
      console.log(this.listsPlayer)
      this.listsPlayer.forEach((player:Player)=>{
        if(selectPlayer === player.idPlayer){
          this.imgPlayer = player.imgGiocatore;
          this.firstName = player.firsname;
          this.lastName = player.lastname;
          
          console.log('Nome:'+player.firsname,'','Cognome:'+player.lastname,' ','Img:'+player.imgGiocatore)
        }else{
          console.log('Player non trovaro. Riprovo');
        }
      })
      // console.log('Nome:'+this.firstName,'','Cognome:'+this.lastName,' ','Img:'+this.imgPlayer)
      let object={
        "img" : this.imgPlayer,
        "firstName" : this.firstName,
        "lastName" : this.lastName
      }
      console.log('object:', object)
      localStorage.setItem('object',JSON.stringify(object));
    })
    
  }
  //Funzione di caricamento e ricevuta dei dati controlla lo stato della chiamata se restituisce o meno
  loadingPlayers(teamId: number) {
    if(this.isLoadedPlayer == false){
    this.apiService.getGiocatoriSquadra(teamId,2023).subscribe({
      next: (response:Player[]) => {
        this.players = response;
      },
      error: (error) => console.error('Error fetching players', error),
      complete: () => {return this.isLoadingPlayers = false, this.isLoadedPlayer = true}
    });
  }
  }

  //Calcola la media di due valori di tipo number
  calculateRoundedAverage(aNumber:number, bMedia:number){
    return Math.round(aNumber / bMedia);
  }

  //Gestione dei Favorite
  //Aggiunge e Rimuove i Team preferiti
  setFavorite(type:string, data:any){
    if(type === 'game'){
      this.favoriteApiService.addFavoriteGame(data)
    } else if(type === 'team'){
      this.favoriteApiService.addFavoriteTeam(data)
    } else if(type === 'player'){
      this.favoriteApiService.addFavoritePlayer(data)
    }
  }

  //Cerca l'elemento all'interno dell'array
  isTeamInFavorites(type:string, id: number){
      return this.listFavTeams && this.listFavTeams.some(favTeam => favTeam.idTeam === id);
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.teamName = params['teamName'];

      this.accordionTeam('panoramica');
      this.accordionGame('risultati');

      this.nextGame.splice(0, this.nextGame.length);
      this.prevoiusGame.splice(0, this.prevoiusGame.length);
      this.players.splice(0, this.players.length);

      this.isLoadingTeam = false;
      this.isLoadedPrevoius = false;
      this.isLoadedPlayer = false;
      this.isLoadedNext = false;

      this.loadingTeam(this.teamName); //Chiamata API squadra
    })
  }

}
