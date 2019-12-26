import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { BeerType } from '../beer-types/beer-types.entities';
import { Breweries } from '../breweries/breweries.entity';
import { UserBeers } from '../user-beer/user-beer.entity';
import { User } from '../user/user.entity';
import { Brewery } from '@brewtodo/api-interfaces';

@Entity()
export class Beer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name:string;

    @Column({ length: 255 })
    description:string;

    @Column()
    abv:number;

    @ManyToOne(() => BeerType)
    @JoinTable()
    beerType: BeerType;

    @ManyToOne(() => Breweries)
    @JoinColumn({name: 'breweryId', referencedColumnName: 'id'})
    breweryId: number;

    brewery: Brewery;
}