import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class UserFavoriteBreweries {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    breweryId: number

    userFavoriteBrewery: UserFavoriteBreweries
}
