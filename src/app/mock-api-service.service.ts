import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockApiServiceService {
  private mockUrl = 'assets/data.json'; // Percorso del file JSON mock

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.mockUrl).pipe(
      map((response: any) => response.users), // Assume che il JSON contenga un array di utenti
      catchError(this.handleError<any[]>('getUsers', []))
    );
  }

  // Gestione degli errori
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
