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

@NgModule({
    declarations: [
        AppComponent,
        BreweryComponent,
        BreweriesComponent,
        HeaderComponent,
        AddBreweryComponent,
        FeaturedBreweriesComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
