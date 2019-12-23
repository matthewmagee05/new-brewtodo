import { Component, OnInit } from '@angular/core';
import { Brewery } from '@brewtodo/api-interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { BreweryService } from '../../Services/brewery.service';

@Component({
  selector: 'brewtodo-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery [] = [];

  brewerySubmitted = false;
  breweryForm: FormGroup;

  constructor(private breweryService: BreweryService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.breweryService.getBrewery().subscribe(breweries => this.breweries = breweries);

    this.breweryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addToCart() {
    window.alert('Added');
  }

  get getBreweryForm() {
    return this.breweryForm.controls;
  }

  addNewBrewery() {
    this.brewerySubmitted = true;

    if (!this.breweryForm.invalid) {
      this.breweryService.postItems(this.breweryForm.value).subscribe(response => {
        window.location.reload();
      }, error => {
        window.alert(error.error.message);
      });
    }
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  

}
