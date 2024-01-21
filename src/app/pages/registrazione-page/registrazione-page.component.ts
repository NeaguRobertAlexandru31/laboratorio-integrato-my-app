import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.scss'],
})
export class RegistrazionePageComponent {
  signUpForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  registrationData: any = {
    
  };

  showSecondForm() {
    this.FirstForm = false;
    this.SecondForm = true;
  }

  signup() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;

      fetch('http://localhost:8045/user/signup', {
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
        console.log('Registrazione avvenuta con successo:', response);
      })
      .catch((error) => {
        console.error('Errore durante la registrazione:', error);
      });
  }}

  FirstForm: boolean = true;
  SecondForm: boolean = false;

  submitFinalForm() {
    console.log('Dati inviati:', this.registrationData);
  }
}
