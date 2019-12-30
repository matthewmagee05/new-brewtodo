import { Component, OnInit, Input } from '@angular/core'
import { Brewery, Review } from '@brewtodo/api-interfaces'

@Component({
    selector: 'brewtodo-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
    @Input() reviews: Review[]
    constructor() {}

    ngOnInit() {}
}
