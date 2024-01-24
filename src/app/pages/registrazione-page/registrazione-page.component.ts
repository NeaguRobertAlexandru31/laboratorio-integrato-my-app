import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.scss'],
})
export class RegistrazionePageComponent {
  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[-!"#$%&'()*+,.\/:;<=>?@[\\\]^_`{|}~])/
      ),
    ]),
  });

  registrationData: any = {};

  constructor(private router: Router, private authService: AuthService) {}

  showSecondForm() {
    this.FirstForm = false;
    this.SecondForm = true;
  }

  signup() {
    if (this.signUpForm) {
      const formData = this.signUpForm.value;
      console.log('Dati inviati correttamente al server');

      /*  http://hoopsdata.ddns.net:8045/user/signup -> DIST per deploy
          http://localhost:8045/user/signup   */

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
          if (!response.token) {
            localStorage.setItem('token', response.token);
            this.authService.setUserAuthenticated(true);
            console.log('reindirizzamente in corso');
            this.router.navigate(['/preferiti']);
            console.log('reindirizzamento completo');
          }
        })
        .catch((error) => {
          console.error('Errore durante la registrazione:', error);
        });
    }
  }

  FirstForm: boolean = true;
  SecondForm: boolean = false;
}
