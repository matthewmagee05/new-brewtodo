import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, JoinTable } from 'typeorm';
import {State} from '@brewtodo/api-interfaces';
import { States } from '../states/state.entity';

@Entity()
export class Breweries {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name:string;

    @Column({ length: 255 })
    description:string;

    @Column({ length: 255 })
    imageURL:string;

    @Column({ length: 255 })
    address:string;

    @Column({ length: 255 })
    zipCode:string;


    @ManyToOne(() => States)
    @JoinTable()
    state: States;

    @Column({ length: 255 })
    phoneNumber:string;

    @Column({ length: 255 })
    businessHours:string;

    @Column()
    hasTShirt:boolean;

    @Column()
    hasMug:boolean;

    @Column()
    hasGrowler:boolean;

    @Column()
    hasFood:boolean;

}