import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable, ManyToOne, ManyToMany } from 'typeorm';
import { Review } from '../review/review.entity';
import { UserBeers } from '../user-beer/user-beer.entity';
import { Beer } from '../beer/beer.entity';
import { UserPurchasedItems } from '../user-purchased-items/user-purchased-item.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    username:string;

    @Column({ length: 255 })
    first_name:string;

    @Column({ length: 255 })
    last_name:string;

    @Column({ length: 255 })
    profile_image_url:string;

    @OneToMany(type => Review, review => review.user)
    @JoinTable()
    review: Review[];
    
    userBeer: UserBeers;

    userPurchasedItem: UserPurchasedItems;
}