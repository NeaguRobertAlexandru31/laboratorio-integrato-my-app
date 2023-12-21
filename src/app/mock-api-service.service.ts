import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {

  private apiUrl = 'assets/file.json'; 
  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    // Effettua la chiamata HTTP per ottenere i dati dei giochi
    return this.http.get<any[]>(this.apiUrl);
  }
}
