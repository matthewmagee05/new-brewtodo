import { Component, OnInit } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { BreweryService } from '../../Services/brewery.service'
import { AuthService } from '../../auth/auth.service'

@Component({
    selector: 'brewtodo-add-brewery',
    templateUrl: './add-brewery.component.html',
    styleUrls: ['./add-brewery.component.css'],
})
export class AddBreweryComponent implements OnInit {
    breweries: Brewery[] = []

    brewerySubmitted = false
    breweryForm: FormGroup

    constructor(
        private breweryService: BreweryService,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.breweryService
            .getBrewery()
            .subscribe(breweries => (this.breweries = breweries))

        this.breweryForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            imageURL: [''],
            address: ['', Validators.required],
            zipCode: ['', Validators.required],
            state: ['', Validators.required],
            phoneNumber: [''],
            businessHours: [''],
            hasTShirt: ['', Validators.required],
            hasMug: ['', Validators.required],
            hasGrowler: ['', Validators.required],
            hasFood: ['', Validators.required],
        })
    }

    addToCart() {
        window.alert('Added')
    }

    get getBreweryForm() {
        return this.breweryForm.controls
    }

    addNewBrewery() {
        this.brewerySubmitted = true

        if (!this.breweryForm.invalid) {
            this.breweryService.postItems(this.breweryForm.value).subscribe(
                response => {
                    window.location.reload()
                },
                error => {
                    window.alert(error.error.message)
                }
            )
        }
    }

    isAdmin() {
        return this.authService.isAdmin()
    }

    isAuthenticated() {
        return this.authService.isAuthenticated()
    }
}
