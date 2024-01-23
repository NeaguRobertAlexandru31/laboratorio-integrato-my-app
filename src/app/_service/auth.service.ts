import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  isUserAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  
  /* Stato autenticazione utente = False */
  private isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userDataSubject = new BehaviorSubject<any>(null);
  
  constructor(){
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData: User = JSON.parse(savedUserData);
      this.setUserAuthenticated(true);
      this.setUserData(userData);
    }
  }
  
  /* Questo metodo accetta un valore booleano e lo imposta come nuovo valore nel BehaviorSubject */  
  setUserAuthenticated(isAuthenticated: boolean): void {
    this.isUserAuthenticatedSubject.next(isAuthenticated);
  }

  /* Metodo per ottenere lo stato di autenticazione come Observable: */
  getUserAuthenticated(): Observable<boolean> {
    return this.isUserAuthenticatedSubject.asObservable();
  }

  setUserData(userData: User | null): void {
    this.userDataSubject.next(userData);
    // Salva i dati dell'utente nel localStorage
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('userData');
    }
  }

  getUserData(): Observable<User | null> {
    return this.userDataSubject.asObservable();
  }

  logout(): void {
    this.setUserAuthenticated(false);
    this.setUserData(null);
    localStorage.removeItem('token');
    console.log("logout eseguito");
  }

  /* Controllo presenza token */
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
