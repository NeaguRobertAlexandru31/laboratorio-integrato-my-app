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
  updateUser(firstname: string, lastname: string, email: string): Observable<any> {
    const url = this.baseUrl + 'user/update';

    // Crea un oggetto con i dati da inviare al server
    const userData = {
      firstname,
      lastname,
      email,
    };

    // Effettua una richiesta HTTP di tipo PUT o POST per aggiornare i dati dell'utente
    return this.http.put(url, userData);
  }
}
