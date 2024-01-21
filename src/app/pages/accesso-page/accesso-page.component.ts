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

  signin() {

    /* Manda mail e password */
    const formData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    // Esegui la richiesta di login al server
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
        // Se la risposta contiene un token
        if (response && response.token) {
          // Memorizza il token nel local storage
          localStorage.setItem('token', response.token);
          console.log(response.token)

          // Setta l'autenticazione nello stato dell'AuthService
          this.authService.setUserAuthenticated(true);

          // Reindirizzamento alla pagina preferiti
          this.router.navigate(['/preferiti']);
        } else {
          console.error("Errore durante l'accesso: Token non presente nella risposta");
        }
      })
      .catch((error) => {
        console.error("Errore durante l'accesso:", error);
      });
  }
}
