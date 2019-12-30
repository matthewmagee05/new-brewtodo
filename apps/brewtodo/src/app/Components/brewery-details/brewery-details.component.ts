import { Component, OnInit, Input } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'

@Component({
    selector: 'brewtodo-brewery-details',
    templateUrl: './brewery-details.component.html',
    styleUrls: ['./brewery-details.component.css'],
})
export class BreweryDetailsComponent implements OnInit {
    @Input() brewery: Brewery

    constructor() {}

    ngOnInit() {}
}
