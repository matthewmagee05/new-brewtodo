import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Brewery, Paginator } from '@brewtodo/api-interfaces'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'

@Injectable({
    providedIn: 'root',
})
export class BreweryService {
    public isLocation: boolean = false
    constructor(private http: HttpClient, private auth: AuthService) {}

    // creates header
    private _authHeader(): Object {
        return {
            headers: new HttpHeaders({
                authorization: `Bearer ${this.auth.getAccessToken()}`,
            }),
        }
    }

    public getBreweries(
        url: string = 'http://localhost:4200/api/breweries/?page=1&limit=12'
    ): Observable<Paginator> {
        this.isLocation = false
        return this.http.get<Paginator>(url)
    }

    public getFeaturedBreweries(): Observable<Brewery[]> {
        return this.http.get<Brewery[]>('api/breweries/featured-breweries')
    }

    public getBreweryById(id: number): Observable<Brewery> {
        return this.http.get<Brewery>(`api/breweries/brewery/${id}`)
    }

    public getBreweryByFilter(
        lat: number,
        lng: number,
        distance: number = 10000,
        beerType: number,
        orderByReview: string,
        url: string = 'api/breweries/location'
    ): Observable<Paginator> {
        const body = {
            lat,
            lng,
            distance,
            beerType,
            orderByReview,
        }
        this.isLocation = true
        return this.http.post<Paginator>(url, body)
    }

    public postItems(brewery: Brewery): Observable<Brewery> {
        return this.http.post<Brewery>(
            '/api/breweries',
            brewery,
            this._authHeader()
        )
    }

    public getBeerTypes(): Observable<Brewery[]> {
        return this.http.get<Brewery[]>('api/beer-types')
    }
}
