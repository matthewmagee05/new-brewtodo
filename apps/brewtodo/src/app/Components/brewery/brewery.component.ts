import { Component, OnInit, Input, OnChanges } from '@angular/core'
import {
    Brewery,
    UserFavoriteBreweries,
    UserVisitedBreweries,
} from '@brewtodo/api-interfaces'
import { BreweryService } from '../../Services/brewery.service'
import { AuthService } from '../../auth/auth.service'

@Component({
    selector: 'brewtodo-brewery',
    templateUrl: './brewery.component.html',
    styleUrls: ['./brewery.component.css'],
})
export class BreweryComponent implements OnInit, OnChanges {
    @Input() brew: Brewery
    isLiked: boolean = false
    isVisited: boolean = false

    constructor(
        private breweryService: BreweryService,
        private authService: AuthService
    ) {}

    ngOnInit() {}

    ngOnChanges() {
        if (this.brew.userFavoriteBreweries !== null) {
            this.isLiked = true
        }
        if (this.brew.userVisitedBreweries !== null) {
            this.isVisited = true
        }
    }

    handleLiked(breweryId: number) {
        this.isLiked = !this.isLiked

        this.isLiked === true
            ? this.postFavoriteBreweries(breweryId)
            : this.deleteFavoriteBrewery(breweryId)
    }

    handleVisited(breweryId: number) {
        this.isVisited = !this.isVisited

        this.isVisited === true
            ? this.postVisitedBreweries(breweryId)
            : this.deleteVisitedBrewery(breweryId)
    }

    postVisitedBreweries(breweryId: number) {
        this.brew.userVisitedBreweries = new UserVisitedBreweries(
            null,
            this.authService.currentUserId
        )
        this.breweryService.postVisitedBreweries(breweryId).subscribe()
    }

    postFavoriteBreweries(breweryId: number) {
        this.brew.userFavoriteBreweries = new UserFavoriteBreweries(
            null,
            this.authService.currentUserId
        )
        this.breweryService.postFavoriteBreweries(breweryId).subscribe()
    }

    deleteFavoriteBrewery(breweryId: number) {
        this.brew.userFavoriteBreweries = null
        this.breweryService.deleteFavoriteBreweries(breweryId).subscribe()
    }

    deleteVisitedBrewery(breweryId: number) {
        this.brew.userVisitedBreweries = null
        this.breweryService.deleteVisitedBreweries(breweryId).subscribe()
    }

    isAuthenticated() {
        return this.authService.isAuthenticated()
    }
}
