import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core'
import { Brewery } from '@brewtodo/api-interfaces'

declare const google: any

@Component({
    selector: 'brewtodo-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    @Input() brewery: Brewery
    geocoder: any
    lat: number
    lng: number
    state: string = 'small'
    address: string
    asyncs: any

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.geocoder = new google.maps.Geocoder()
        this.address = `${
            this.brewery.address
        }, ${this.brewery.zipCode.toString()}`
        this.geocode(this.address)
    }

    geocode(data) {
        return this.geocoder.geocode({ address: data }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                this.lat = results[0].geometry.location.lat()
                this.lng = results[0].geometry.location.lng()
            } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
                this.lat = 33.12127
                this.lng = -96.88961
            }
        })
    }
}
