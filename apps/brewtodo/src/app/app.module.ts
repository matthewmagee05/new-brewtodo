import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweryComponent } from './Components/brewery/brewery.component';
import { BreweriesComponent } from './Components/breweries/breweries.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [AppComponent, BreweryComponent, BreweriesComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule,ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
