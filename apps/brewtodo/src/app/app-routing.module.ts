import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BreweryComponent } from './Components/brewery/brewery.component'
import { HomeComponent } from './Components/home/home.component'
import { BreweryDetailsWrapperComponent } from './Components/brewery-details-wrapper/brewery-details-wrapper.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: HomeComponent },
    { path: 'brewery/:id', component: BreweryDetailsWrapperComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
