import { Component, OnInit, Output, OnDestroy } from '@angular/core'
import { BreweryService } from '../../Services/brewery.service'
import { Brewery } from '@brewtodo/api-interfaces'
import { Subscription } from 'rxjs'
import { AuthService } from '../../auth/auth.service'

@Component({
    selector: 'brewtodo-featured-breweries',
    templateUrl: './featured-breweries.component.html',
    styleUrls: ['./featured-breweries.component.css'],
})
export class FeaturedBreweriesComponent implements OnInit, OnDestroy {
    @Output() breweries: Brewery[]
    subscription: Subscription
    constructor(
        private breweryService: BreweryService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.subscription = this.authService
            .sendNotificationOfAuth()
            .subscribe(res => {
                this.breweryService
                    .getFeaturedBreweries()
                    .subscribe(breweries => (this.breweries = breweries))
            })

        this.subscription = this.breweryService
            .getFeaturedBreweries()
            .subscribe(breweries => (this.breweries = breweries))
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe()
    }
}
