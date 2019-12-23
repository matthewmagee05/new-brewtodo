import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Breweries {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name:string;

    @Column({ length: 255 })
    description:string;
}