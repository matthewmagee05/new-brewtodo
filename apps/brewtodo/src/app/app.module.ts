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
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { BreweryDetailsComponent } from './Components/brewery-details/brewery-details.component';
import { BreweryDetailsWrapperComponent } from './Components/brewery-details-wrapper/brewery-details-wrapper.component'

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
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
