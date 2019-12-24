import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class States {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 2 })
    code:string;

    @Column({ length: 255 })
    name:string;

    @OneToMany(type => States, state => state.id)
    state: States;

}