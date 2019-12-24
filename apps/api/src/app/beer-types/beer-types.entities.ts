import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class BeerType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name:string;

}