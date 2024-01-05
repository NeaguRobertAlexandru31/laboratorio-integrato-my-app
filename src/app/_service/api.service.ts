import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

// Model
import Nome from '../_models/nome.model';

@Injectable({
 providedIn: 'root',
})

export class ApiService {
    
    baseUrl = 'http://localhost:8045/';
    
    constructor(private http: HttpClient) {}

    getAll(){
    return this.http.get(this.baseUrl + 'team/all')
      .pipe(map((response:any) => {
        console.log(response);
        return response as Nome[];
      }));
    };
}