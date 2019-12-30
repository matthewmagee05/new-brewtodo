import { Component, OnInit, Input } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'

@Component({
    selector: 'brewtodo-brewery',
    templateUrl: './brewery.component.html',
    styleUrls: ['./brewery.component.css'],
})
export class BreweryComponent implements OnInit {
    @Input() brew: Brewery

    constructor() {}

    ngOnInit() {}
}
