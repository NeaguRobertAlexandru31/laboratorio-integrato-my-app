import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-accesso-page',
  templateUrl: './accesso-page.component.html',
  styleUrls: ['./accesso-page.component.scss'],
})
export class AccessoPageComponent {
  
  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  tokenVerify:boolean = false;

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
        // Puoi aggiungere qui il reindirizzamento o altre azioni dopo l'accesso.

        if(!this.tokenVerify){
          this.tokenVerify = true;
          sessionStorage.setItem('token', response.token)
        }
      })
      .catch((error) => {
        console.error("Errore durante l'accesso:", error);
      });
  }
}
