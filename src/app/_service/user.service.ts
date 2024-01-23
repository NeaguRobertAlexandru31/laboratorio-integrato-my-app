import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  /* private baseUrl = 'http://hoopsdata.ddns.net:8045/'; */
  private baseUrl = 'http://localhost:8045/';

  constructor(private http: HttpClient) {}

  // Funzione per aggiornare i dati dell'utente nel database
  updateUserFirstname(firstname: string): Observable<any> {
    const url = this.baseUrl + 'user/update/firsname';

    // Crea un oggetto con i dati da inviare al server
    const userData = {
      firstname
    };

    // Effettua una richiesta HTTP di tipo PUT o POST per aggiornare i dati dell'utente
    return this.http.put(url, userData);
  }

  // Funzione per aggiornare i dati dell'utente nel database
  updateUserLastname(lastname: string): Observable<any> {
    const url = this.baseUrl + 'user/update/lastname';

    // Crea un oggetto con i dati da inviare al server
    const userData = {
      lastname
    };

    // Effettua una richiesta HTTP di tipo PUT o POST per aggiornare i dati dell'utente
    return this.http.put(url, userData);
  }

  // Funzione per aggiornare i dati dell'utente nel database
  updateUserEmail(email: string): Observable<any> {
    const url = this.baseUrl + 'user/update/email';

    // Crea un oggetto con i dati da inviare al server
    const userData = {
      email
    };

    // Effettua una richiesta HTTP di tipo PUT o POST per aggiornare i dati dell'utente
    return this.http.put(url, userData);
  }
}
