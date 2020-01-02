import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { Brewery, UserFavoriteBreweries } from '@brewtodo/api-interfaces'
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

    constructor(
        private breweryService: BreweryService,
        private authService: AuthService
    ) {}

    ngOnInit() {}

    ngOnChanges() {
        if (this.brew.userFavoriteBreweries !== null) {
            this.isLiked = true
        }
    }

    handleLiked(breweryId: number) {
        this.isLiked = !this.isLiked

        this.isLiked === true
            ? this.postFavoriteBreweries(breweryId)
            : this.deleteFavoriteBrewery(breweryId)
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

    isAuthenticated() {
        return this.authService.isAuthenticated()
    }
}
