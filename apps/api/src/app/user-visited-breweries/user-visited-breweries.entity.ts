import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class UserVisitedBreweries {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    breweryId: number

    userVisitedBrewery: UserVisitedBreweries
}
