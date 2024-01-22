import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  
  /* Stato autenticazione utente = False */
  private isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  /* Questo metodo accetta un valore booleano e lo imposta come nuovo valore nel BehaviorSubject */  
  setUserAuthenticated(isAuthenticated: boolean): void {
    this.isUserAuthenticatedSubject.next(isAuthenticated);
  }

  /* Metodo per ottenere lo stato di autenticazione come Observable: */
  getUserAuthenticated(): Observable<boolean> {
    return this.isUserAuthenticatedSubject.asObservable();
  }

  logout(): void {
    this.setUserAuthenticated(false);
    localStorage.removeItem('token');
    console.log("logout eseguito");
  }

  /* Controllo presenza token */
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
