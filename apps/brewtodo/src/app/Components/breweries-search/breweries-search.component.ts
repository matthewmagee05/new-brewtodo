import { Component, OnInit, Output } from '@angular/core'
import { BreweryService } from '../../Services/brewery.service'
import { Brewery, Paginator } from '@brewtodo/api-interfaces'

@Component({
    selector: 'brewtodo-breweries-search',
    templateUrl: './breweries-search.component.html',
    styleUrls: ['./breweries-search.component.css'],
})
export class BreweriesSearchComponent implements OnInit {
    @Output() paginator: Paginator
    pageCount: any[]
    currentPage: number
    constructor(private breweryService: BreweryService) {}

    ngOnInit() {
        this.breweryService.getBreweries().subscribe(res => {
            const brews = this.calculateAverageReview(res.items)
            this.paginator = res
            this.pageCount = Array.from(Array(this.paginator.pageCount)).map(
                (x, i) => i
            )
            this.paginator.items = brews
            this.getCurrentPage(this.paginator.next)
        })
    }

    getBreweries(url: string) {
        this.breweryService.getBreweries(url).subscribe(res => {
            const brews = this.calculateAverageReview(res.items)
            this.paginator = res
            this.paginator.items = brews
            this.getCurrentPage(this.paginator.next)
        })
    }

    getPageByNumber(pageNumber: number) {
        let currentPageIndex = this.paginator.next.indexOf('=')
        let endingPageIndex = this.paginator.next.indexOf('&')
        let next = this.paginator.next
        next =
            next.substring(0, currentPageIndex + 1) +
            pageNumber +
            next.substring(endingPageIndex)
        this.getBreweries(next)
    }

    calculateAverageReview(breweries: Brewery[]) {
        breweries.forEach(brewery => {
            const total =
                brewery.review.reduce((p, c) => {
                    return p + parseFloat(c.rating)
                }, 0) / brewery.review.length
            brewery.avgReview = isNaN(total) ? 0 : Math.round(total)
        })
        return breweries
    }

    getCurrentPage(next) {
        let currentPageIndex = this.paginator.next.indexOf('=')
        let endingPageIndex = this.paginator.next.indexOf('&')
        this.currentPage = parseInt(
            next.substring(currentPageIndex + 1, endingPageIndex - 1)
        )
        this.currentPage =
            parseInt(next.substring(currentPageIndex + 1, endingPageIndex)) - 1
    }
}
