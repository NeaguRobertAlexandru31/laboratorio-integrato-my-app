import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_service/auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-accesso-page',
  templateUrl: './accesso-page.component.html',
  styleUrls: ['./accesso-page.component.scss'],
})
export class AccessoPageComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  tokenVerify: boolean = false;
  // Variabile per memorizzare il messaggio di errore
  errorMessage: string = '';

  signin() {
    /* Manda mail e password */
    const formData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    // Esegui la richiesta di login al server
    /* http://hoopsdata.ddns.net:8045/user/signin -> DIST per deploy 
        http://localhost:8045/user/signin */
    fetch('http://localhost:8045/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        console.log('Accesso avvenuto con successo:', response);
        if (!this.tokenVerify) {
          this.tokenVerify = true;
          localStorage.setItem('token', response.token);
          // Aggiungi questa parte per impostare i dati dell'utente nel servizio AuthService
          this.authService.setUserAuthenticated(true);
          this.authService.setUserData({
            firstname: response.firstname,
            lastname: response.lastname,
            email: response.email,
            isUserAuthenticated: true,
          });
          // Reindirizza l'utente alla pagina /preferiti se correttamente loggato
          this.router.navigate(['/preferiti']);
        }
      })
      .catch((error) => {
        console.error("Errore durante l'accesso:", error);
        // Mostriamo un messaggio di errore quando le credenziali sono sbagliate
        this.errorMessage = 'Credenziali non valide. Riprova.';
      });
  }

}
