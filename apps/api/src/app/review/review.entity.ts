import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'
import { User } from '../user/user.entity'
import { Breweries } from '../breweries/breweries.entity'

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    description: string

    @Column()
    rating: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User

    @ManyToOne(() => Breweries)
    @JoinColumn({ name: 'breweryId', referencedColumnName: 'id' })
    breweryId: number
}
