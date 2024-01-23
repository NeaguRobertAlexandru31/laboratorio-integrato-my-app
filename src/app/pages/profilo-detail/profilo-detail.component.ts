import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { AuthService, User } from 'src/app/_service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profilo-detail',
  templateUrl: 'profilo-detail.component.html',
  styleUrls: ['./profilo-detail.component.scss']
})

export class ProfiloDetailComponent implements OnInit {

  user: User | null = null;
  apiService: any;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((user) => {
      this.user = user;
    });
  }

  saveUserData(): void {
    // Qui puoi implementare la logica per inviare i dati al server e salvarli nel database
    if (this.user) {
      this.apiService.updateUserData(this.user).subscribe((response: any) => {
        // Aggiorna l'interfaccia utente o gestisci eventuali risposte dal server
        console.log('Dati utente aggiornati con successo:', response);
      });
    }
}}