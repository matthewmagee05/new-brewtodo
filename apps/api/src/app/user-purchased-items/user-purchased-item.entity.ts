import { Entity,PrimaryGeneratedColumn, Column } from 'typeorm';
import { Beer } from '../beer/beer.entity';

@Entity()
export class UserPurchasedItems {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: number;

    @Column()
    brewery: number;

    @Column()
    has_purchased_t_shirt: boolean;

    @Column()
    has_purchased_mug: boolean;

    @Column()
    has_purchased_growler: boolean;

    @Column()
    has_purchased_food: boolean;
    
}