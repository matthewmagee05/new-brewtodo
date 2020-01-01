import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core'
import { BreweryService } from '../../Services/brewery.service'
import { Brewery, Paginator } from '@brewtodo/api-interfaces'
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete'

@Component({
    selector: 'brewtodo-breweries-search',
    templateUrl: './breweries-search.component.html',
    styleUrls: ['./breweries-search.component.css'],
})
export class BreweriesSearchComponent implements OnInit {
    @Output() paginator: Paginator
    @ViewChild('placesRef', null) placesRef: GooglePlaceDirective
    pageCount: any[]
    currentPage: number
    lat: number
    lng: number
    distance: number
    constructor(public breweryService: BreweryService) {}

    ngOnInit() {
        this.breweryService.getBreweries().subscribe(res => {
            this.paginator = res
            this.pageCount = Array.from(Array(this.paginator.pageCount)).map(
                (x, i) => i + 1
            )
            this.getCurrentPage(this.paginator.next)
        })
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
        this.lat = this.placesRef.place.geometry.location.lat()
        this.lng = this.placesRef.place.geometry.location.lng()
        this.breweryService
            .getBreweryByFilter(this.lat, this.lng, this.distance)
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
            .getBreweryByFilter(this.lat, this.lng, this.distance, next)
            .subscribe(res => {
                this.paginator = res
                this.getCurrentPage(this.paginator.next)
            })
    }

    resetSearchFields() {
        this.distance = undefined
    }
}
