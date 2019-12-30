import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BreweryComponent } from './Components/brewery/brewery.component'
import { BreweriesComponent } from './Components/breweries/breweries.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HeaderComponent } from './Components/header/header.component'
import { AddBreweryComponent } from './Components/add-brewery/add-brewery.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FeaturedBreweriesComponent } from './Components/featured-breweries/featured-breweries.component'
import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './Components/home/home.component'
import { BreweryDetailsComponent } from './Components/brewery-details/brewery-details.component'
import { BreweryDetailsWrapperComponent } from './Components/brewery-details-wrapper/brewery-details-wrapper.component'
import { BeerComponent } from './Components/beer/beer.component'
import { ReviewComponent } from './Components/review/review.component'
import { MapComponent } from './Components/map/map.component'
import { AgmCoreModule } from '@agm/core'

@NgModule({
    declarations: [
        AppComponent,
        BreweryComponent,
        BreweriesComponent,
        HeaderComponent,
        AddBreweryComponent,
        FeaturedBreweriesComponent,
        HomeComponent,
        BreweryDetailsComponent,
        BreweryDetailsWrapperComponent,
        BeerComponent,
        ReviewComponent,
        MapComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCPsZmjBdiOTHXKup0Qv8bimAL4N4N_RgE',
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
