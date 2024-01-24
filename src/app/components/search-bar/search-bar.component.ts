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

  listTeam: AllTeams[] = [];
  listPlayer: AllPlayers[] = [];


  constructor(private apiService: ApiService, private router:Router ,private route: ActivatedRoute) {}

  toggleSearch: boolean = false;

  teamName: string = '';

  isVisible:boolean = false;

  //Funzione per la chiusura della lista search bar
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (!this.searchbar.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  //Funzione per la gestione dell'apertura della lista di squadre e giocatori
  showList(){
    this.isVisible = !this.isVisible;
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
