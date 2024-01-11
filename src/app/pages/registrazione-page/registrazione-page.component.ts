import { Component } from '@angular/core';

@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.scss'],
})
export class RegistrazionePageComponent {
  FirstForm: boolean = true;
  SecondForm: boolean = false;

  nome: string = '';
  email: string = '';
  password: string = '';

  showSecondForm() {
    this.FirstForm = false;
    this.SecondForm = true;
  }

  submitFinalForm() {
    // Qui puoi gestire l'invio dei dati, ad esempio chiamando un servizio o un'altra logica necessaria
    console.log('Dati inviati:', this.nome, this.email, this.password);
  }
}
