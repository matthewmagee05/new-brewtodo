import { Component, OnInit, Input } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'
import {
    trigger,
    style,
    transition,
    animate,
    query,
    stagger,
} from '@angular/animations'

@Component({
    selector: 'brewtodo-breweries',
    templateUrl: './breweries.component.html',
    styleUrls: ['./breweries.component.css'],
    animations: [
        trigger('breweriesAnimation', [
            transition('* => *', [
                query('.card', style({ transform: 'translateX(-100%)' }), {
                    optional: true,
                }),
                query(
                    '.card',
                    [
                        stagger('200ms', [
                            animate(
                                '500ms',
                                style({ transform: 'translateX(0)' })
                            ),
                        ]),
                    ],
                    { optional: true }
                ),
            ]),
        ]),
    ],
})
export class BreweriesComponent implements OnInit {
    @Input() breweries: Brewery[]
    constructor() {}

    ngOnInit() {}
}
