import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from '@brewtodo/api-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  // creates header
  private _authHeader(): Object {
    return {
      headers: new HttpHeaders({ 'authorization': `Bearer ${this.auth.getAccessToken()}`})
    };
  }

  public getBrewery(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>('/api/breweries');
  }

  public postItems(brewery: Brewery): Observable<Brewery> {
    return this.http.post<Brewery>('/api/breweries', brewery, this._authHeader());
  }

}