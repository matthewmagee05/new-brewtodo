import { Component, OnInit, Input } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { BreweryService } from '../../Services/brewery.service'

@Component({
    selector: 'brewtodo-brewery-details',
    templateUrl: './brewery-details.component.html',
    styleUrls: ['./brewery-details.component.css'],
})
export class BreweryDetailsComponent implements OnInit {
    private routeSub: Subscription
    brewery: Brewery

    constructor(
        private route: ActivatedRoute,
        private breweryService: BreweryService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            const breweryId = params['id']
            this.breweryService.getBreweryById(breweryId).subscribe(res => {
                this.brewery = res
            })
        })
    }
}
