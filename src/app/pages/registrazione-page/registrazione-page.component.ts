import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/* import { User } from '../../_models/user.model'
 */
@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.scss'],
})
export class RegistrazionePageComponent {
  
  signUpForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registrationData: any = {
    
  };

  showSecondForm() {
    this.FirstForm = false;
    this.SecondForm = true;
  }

  signup() {
    
    if (this.signUpForm) {
      const formData = this.signUpForm.value;
      console.log('Dati inviati al server:', formData);


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


}
