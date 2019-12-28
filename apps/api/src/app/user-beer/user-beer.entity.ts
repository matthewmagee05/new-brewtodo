import { Entity,PrimaryGeneratedColumn } from 'typeorm';
import { Beer } from '../beer/beer.entity';

@Entity()
export class UserBeers {

    @PrimaryGeneratedColumn()
    id: number;

    beer: Beer[];
    
}