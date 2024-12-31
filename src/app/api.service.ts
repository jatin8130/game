import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/assets/gamelist.json'; // Proxy will forward this to the actual API

  constructor(private http: HttpClient) {}

  fetchGames(): Observable<any[]> {    
    return this.http.get<any[]>(this.apiUrl);
  }  
  
}
