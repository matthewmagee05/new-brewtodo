import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './Components/home/home.component'
import { BreweryDetailsWrapperComponent } from './Components/brewery-details-wrapper/brewery-details-wrapper.component'
import { BreweriesSearchComponent } from './Components/breweries-search/breweries-search.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: HomeComponent },
    { path: 'brewery/:id', component: BreweryDetailsWrapperComponent },
    { path: 'breweries', component: BreweriesSearchComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
