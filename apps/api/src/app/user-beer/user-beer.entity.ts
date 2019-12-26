import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable, ManyToOne, ManyToMany } from 'typeorm';
import { Beer } from '../beer/beer.entity';
import { User } from '../user/user.entity';
import { beerProviders } from '../beer/beer.provider';

@Entity()
export class UserBeers {

    @PrimaryGeneratedColumn()
    id: number;

    beer: Beer[];
    
}