import { Component, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { Brewery, Beer, Review } from '@brewtodo/api-interfaces'
import { ActivatedRoute } from '@angular/router'
import { BreweryService } from '../../Services/brewery.service'

@Component({
    selector: 'brewtodo-brewery-details-wrapper',
    templateUrl: './brewery-details-wrapper.component.html',
    styleUrls: ['./brewery-details-wrapper.component.css'],
})
export class BreweryDetailsWrapperComponent implements OnInit {
    private routeSub: Subscription
    @Output() brewery: Brewery
    @Output() beers: Beer[]
    @Output() reviews: Review[]

    constructor(
        private route: ActivatedRoute,
        private breweryService: BreweryService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            const breweryId = params['id']
            this.breweryService.getBreweryById(breweryId).subscribe(res => {
                this.brewery = res
                this.beers = res.beer
                this.reviews = res.review
                console.log(res)
            })
        })
    }
}
