import { Component, OnInit, Input } from '@angular/core'
import { Brewery, Beer } from '@brewtodo/api-interfaces'
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
} from '@angular/animations'

@Component({
    selector: 'brewtodo-beer',
    templateUrl: './beer.component.html',
    styleUrls: ['./beer.component.css'],
    animations: [
        trigger('myAwesomeAnimation', [
            state(
                'small',
                style({
                    transform: 'scale(1)',
                })
            ),
            state(
                'large',
                style({
                    transform: 'scale(2) translateX(-60px)',
                })
            ),
            transition(
                'small <=> large',
                animate(
                    '300ms ease-in',
                    keyframes([
                        style({
                            opacity: 0,
                            transform: 'translateY(-75%)',
                            offset: 0,
                        }),
                        style({
                            opacity: 1,
                            transform: 'translateY(35px)',
                            offset: 0.5,
                        }),
                        style({
                            opacity: 1,
                            transform: 'translateY(0)',
                            offset: 1.0,
                        }),
                    ])
                )
            ),
        ]),
    ],
})
export class BeerComponent implements OnInit {
    @Input() beers: Beer
    state: string = 'small'
    constructor() {}

    ngOnInit() {}

    animateMe() {
        this.state = this.state === 'small' ? 'large' : 'small'
    }
}
