import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammateApiService {
  fetchData() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'assets/programmate.json';

  constructor(private http: HttpClient) { }

  getBasketballGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
