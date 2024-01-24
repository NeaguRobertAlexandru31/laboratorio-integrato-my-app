import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import AllTeams from 'src/app/_models/all.model';
import AllPlayers from 'src/app/_models/all.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  @ViewChild('searchbar')
  
  searchbar!: ElementRef;
  searchText = '';

  listTeam: AllTeams[] = []; //Lista di tutti i team
  listPlayer: AllPlayers[] = []; //Lista di tutti i player


  constructor(private apiService: ApiService, private router:Router ,private route: ActivatedRoute) {}


  isVisible:boolean = false; //Stato di visibilita della sezione correlata(lista)

  //Funzione per la chiusura della lista search bar
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (!this.searchbar.nativeElement.contains(event.target)) {// Verifica che l'elemento cliccato non sia la searchbar
      this.isVisible = false; // Se l'elemento cliccato è al di fuori del campo di ricerca cambia il valore a false
    }
  }

  //Funzione per la gestione dell'apertura della lista di squadre e giocatori
  showList(){
    this.isVisible = !this.isVisible; //Cambia il valore tra true e false
  }

  ngOnInit(): void{
    //Chiamata API per la lista di tutti i team
    this.apiService.getAllTeams().subscribe((response: any) => {
    this.listTeam = response; //Inserisce i dati ricevuti all'interno dell'array listTeam 
  });
    //Chiamata API per la lista di tutti i player
    this.apiService.getAllPlayer().subscribe((response: any) => {
    this.listPlayer = response; //Inserisce i dati ricevuti all'interno dell'array listPlayer
  });
  }
}
