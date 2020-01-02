import {
    Component,
    OnInit,
    Output,
    ViewChild,
    ElementRef,
    OnDestroy,
} from '@angular/core'
import { BreweryService } from '../../Services/brewery.service'
import { Brewery, Paginator, BeerType } from '@brewtodo/api-interfaces'
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete'
import { AuthService } from '../../auth/auth.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'brewtodo-breweries-search',
    templateUrl: './breweries-search.component.html',
    styleUrls: ['./breweries-search.component.css'],
})
export class BreweriesSearchComponent implements OnInit, OnDestroy {
    @Output() paginator: Paginator
    @ViewChild('placesRef', null) placesRef: GooglePlaceDirective
    pageCount: any[]
    currentPage: number
    lat: number
    lng: number
    distance: number
    beerTypes: BeerType[]
    selectedBeerType: number
    orderByReviewVal: string
    subscription: Subscription
    constructor(
        public breweryService: BreweryService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.subscription = this.authService
            .sendNotificationOfAuth()
            .subscribe(res => {
                this.breweryService.getBreweries().subscribe(res => {
                    this.paginator = res
                    this.pageCount = Array.from(
                        Array(this.paginator.pageCount)
                    ).map((x, i) => i + 1)
                    this.getCurrentPage(this.paginator.next)
                })
            })
        if (
            this.authService.isAuthenticated() &&
            this.authService.currentUserId
        ) {
            this.subscription = this.breweryService
                .getBreweries()
                .subscribe(res => {
                    this.paginator = res
                    this.pageCount = Array.from(
                        Array(this.paginator.pageCount)
                    ).map((x, i) => i + 1)
                    this.getCurrentPage(this.paginator.next)
                })
        }

        this.getBeerTypes()
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe()
    }

    getBreweries(url: string) {
        this.breweryService.getBreweries(url).subscribe(res => {
            this.paginator = res
            this.getCurrentPage(this.paginator.next)
        })
    }

    getPageByNumber(pageNumber: number) {
        let currentPageIndex = this.paginator.next.indexOf('=')
        let endingPageIndex = this.paginator.next.indexOf('&')
        let next =
            this.paginator.next.length > 0
                ? this.paginator.next
                : this.paginator.previous

        if (currentPageIndex === this.paginator.pageCount) {
            next =
                next.substring(0, currentPageIndex) +
                pageNumber +
                next.substring(endingPageIndex)
        } else {
            next =
                next.substring(0, currentPageIndex + 1) +
                pageNumber +
                next.substring(endingPageIndex)
        }

        this.breweryService.isLocation
            ? this.getBreweriesLocation(next)
            : this.getBreweries(next)
    }

    getCurrentPage(next) {
        if (this.paginator.next.length < 1) {
            this.currentPage = this.paginator.pageCount
        } else {
            let currentPageIndex = this.paginator.next.indexOf('=')
            let endingPageIndex = this.paginator.next.indexOf('&')

            this.currentPage = parseInt(
                next.substring(currentPageIndex + 1, endingPageIndex - 1)
            )

            this.currentPage =
                parseInt(
                    next.substring(currentPageIndex + 1, endingPageIndex)
                ) - 1
        }
    }

    public handleAddressChange(address: any) {
        if (this.placesRef.place) {
            this.lat = this.placesRef.place.geometry.location.lat()
            this.lng = this.placesRef.place.geometry.location.lng()
        }

        this.breweryService
            .getBreweryByFilter(
                this.lat,
                this.lng,
                this.distance,
                this.selectedBeerType,
                this.orderByReviewVal
            )
            .subscribe(res => {
                this.paginator = res
                this.pageCount = Array.from(
                    Array(this.paginator.pageCount)
                ).map((x, i) => i + 1)
                this.getCurrentPage(this.paginator.next)
            })
    }

    getBreweriesLocation(next: string) {
        this.breweryService
            .getBreweryByFilter(
                this.lat,
                this.lng,
                this.distance,
                this.selectedBeerType,
                this.orderByReviewVal,
                next
            )
            .subscribe(res => {
                this.paginator = res
                this.getCurrentPage(this.paginator.next)
            })
    }

    resetSearchFields() {
        this.distance = undefined
        this.selectedBeerType = undefined
        this.orderByReviewVal = undefined
    }

    getBeerTypes() {
        this.breweryService.getBeerTypes().subscribe(res => {
            this.beerTypes = res
        })
    }
}
