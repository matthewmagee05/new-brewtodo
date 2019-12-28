import { Component, OnInit, Output } from '@angular/core'
import { BreweryService } from '../../Services/brewery.service'
import { Brewery } from '@brewtodo/api-interfaces'

@Component({
    selector: 'brewtodo-featured-breweries',
    templateUrl: './featured-breweries.component.html',
    styleUrls: ['./featured-breweries.component.css'],
})
export class FeaturedBreweriesComponent implements OnInit {
    @Output() breweries: Brewery[]
    constructor(private breweryService: BreweryService) {}

    ngOnInit() {
        this.breweryService
            .getFeaturedBreweries()
            .subscribe(breweries => (this.breweries = breweries))
    }
}
