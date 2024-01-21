import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  setUserAuthenticated(isAuthenticated: boolean): void {
    this.isUserAuthenticatedSubject.next(isAuthenticated);
  }

  getUserAuthenticated(): Observable<boolean> {
    return this.isUserAuthenticatedSubject.asObservable();
  }
}
