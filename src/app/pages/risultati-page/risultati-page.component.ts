import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';

//Chiama API
import { ApiService } from '../../_service/api.service';
import Game from '../../_models/game.model';
import ListFavGames from '../../_models/favorite.model';
import { FavoriteApiService } from 'src/app/_service/favoriteApi.service';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss'],
})
export class RisultatiPageComponent implements OnInit {
  games: Game[] = []; //Array dei game
  currentDate: Date = new Date(); //Data attuale
  idGame: number = 0; //Id game per la comunicazione tramite Route

  sectionResult: boolean = true;//Stato della sezione
  listFavGames: ListFavGames[] = [];//Array di id dei game preferiti
  
  constructor(private apiService: ApiService, private favoriteApiService: FavoriteApiService) {}

  //Games
  isLoading: boolean = true; // Flag per indicare se le partite sono in fase di caricamento
  //Funzione di caricamento dei dati tramite chiamata API
  loadingGames(date: Date) {
    this.apiService.getGames(DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')).subscribe({
      next: (response: Game[]) => {
        this.games = response; //Inizzializza l'array con i valori ricevuti dalla chiamata
      },
      error: (error) => console.error('Error fetching games', error),
      complete: () => {return this.isLoading = false}
    });
  }

  //Formattazione della data
  formatData(start:string) {
    const dateTimeObject = DateTime.fromISO(start); //Converte il dato di tipo string in un valore di tipo DateTime di Luxon
    const formattedDate = dateTimeObject.toFormat("dd-MM-yyyy"); //Formatta la data
    const formattedTime = dateTimeObject.toFormat("HH:mm"); //Formatta l'orario

    return `${formattedDate}\n${formattedTime}`;//Restituisce il valore finale
  }

  //Funzione di chiamata API per ottenere la lista aggiornata dei preferiti
  updateListGame() {
    if (localStorage.getItem('token')) { //Viene fatto il controllo della presenza del token
      this.favoriteApiService.getListFavoriteGames().subscribe({
        next: (response: ListFavGames[]) => {
          this.listFavGames = response; //Inizzializza l'array con i valori ricevuti dalla chiamata
        },//Quando il tutto viene completato viene cambiato lo stato di isLoadingGames
        error: (error) => console.error('Error fetching favorite games', error),
  });}}

    //Gestische l'aggiunta e rimozione dei game
    // Questa funzione utilizza dei setTimeout per mantenere una gerarchia di caricamento per non sovrapporre le chiamate che vanno eseguite una dopo l'altra
    setFavoriteGame(data: number) {
      try {
        this.favoriteApiService.addFavoriteGame(data); // Chiamata al servizio API per aggiungere o rimuovere un gioco dai preferiti
      } finally {
        try {
          setTimeout(() => { 
            this.updateListGame(); // La funzione viene lanciata non prima di 1secondo 
          },1000)
        } finally {
          setTimeout(() => {
          this.loadingGames(this.currentDate); // La funzione viene lanciata non prima di 1.2 secondi
        },1200)
        }
      }
    }

  //Cerca l'elemento all'interno dell'array
  isTeamInFavorites(id: number){
      return this.listFavGames && this.listFavGames.some(favGame => favGame.idGame === id);
  }

  ngOnInit(){
    this.loadingGames(this.currentDate);
    this.updateListGame()
  }
}
