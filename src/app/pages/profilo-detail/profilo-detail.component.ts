import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { AuthService, User } from 'src/app/_service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-profilo-detail',
  templateUrl: 'profilo-detail.component.html',
  styleUrls: ['./profilo-detail.component.scss'],
})
export class ProfiloDetailComponent implements OnInit {
  user: User | null = null;
  apiService: any;

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((user) => {
      this.user = user;
    });
  }

  saveUserFirsname(): void {
    // Qui puoi implementare la logica per inviare i dati al server e salvarli nel database
    if (this.user) {
      // Chiamata al servizio UserService per aggiornare i dati dell'utente
      this.userService
        .updateUserFirstname(this.user.firstname)
        .subscribe(
          (response: any) => {
            // Aggiorna l'interfaccia utente o gestisci eventuali risposte dal server
            console.log('Nome utente aggiornati con successo:', response);
          },
          (error: any) => {
            console.error(
              "Errore durante l'aggiornamento dei dati utente:",
              error
            );
          }
        );
    }
  }

  saveUserLastname(): void {
    // Qui puoi implementare la logica per inviare i dati al server e salvarli nel database
    if (this.user) {
      // Chiamata al servizio UserService per aggiornare i dati dell'utente
      this.userService
        .updateUserLastname(this.user.lastname)
        .subscribe(
          (response: any) => {
            // Aggiorna l'interfaccia utente o gestisci eventuali risposte dal server
            console.log('Cognome utente aggiornato con successo:', response);
          },
          (error: any) => {
            console.error(
              "Errore durante l'aggiornamento dei dati utente:",
              error
            );
          }
        );
    }
  }

  saveUserEmail(): void {
    // Qui puoi implementare la logica per inviare i dati al server e salvarli nel database
    if (this.user) {
      // Chiamata al servizio UserService per aggiornare i dati dell'utente
      this.userService
        .updateUserEmail(this.user.email)
        .subscribe(
          (response: any) => {
            // Aggiorna l'interfaccia utente o gestisci eventuali risposte dal server
            console.log('Email utente aggiornata con successo:', response);
          },
          (error: any) => {
            console.error(
              "Errore durante l'aggiornamento dei dati utente:",
              error
            );
          }
        );
    }
  }

  saveUserPassword(): void {
    // Qui puoi implementare la logica per inviare i dati al server e salvarli nel database
    if (this.user) {
      // Chiamata al servizio UserService per aggiornare i dati dell'utente
      this.userService
        .updateUserPassword(this.user.password)
        .subscribe(
          (response: any) => {
            // Aggiorna l'interfaccia utente o gestisci eventuali risposte dal server
            console.log('Password utente aggiornata con successo:', response);
          },
          (error: any) => {
            console.error(
              "Errore durante l'aggiornamento dei dati utente:",
              error
            );
          }
        );
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        // Leggi l'immagine come Base64
        const base64Image = e.target?.result as string;
  
        // Esegui l'upload del file al server, se necessario
        // Dopo l'upload, ottieni l'URL del file dal server
        const imageUrl = 'data:image/png;base64,' + base64Image; // Aggiungi il prefisso Base64
  
        // Aggiorna l'URL dell'immagine nel tuo oggetto user
        if (this.user) {
          this.user.profileImageUrl = imageUrl;
        }
      };
  
      reader.readAsDataURL(file);
    }
}}
