import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesso-page',
  templateUrl: './accesso-page.component.html',
  styleUrls: ['./accesso-page.component.scss'],
})
export class AccessoPageComponent {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  tokenVerify: boolean = false;

  signin() {
    const formData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    fetch('http://localhost:8045/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('Accesso avvenuto con successo:', response);
        if (!this.tokenVerify) {
          this.tokenVerify = true;
          localStorage.setItem('token', response.token);
          // Reindirizza l'utente alla pagina /preferiti se correttamente loggato
          this.router.navigate(['/preferiti']);
        }
      })
      .catch((error) => {
        console.error("Errore durante l'accesso:", error);
      });
  }
}
