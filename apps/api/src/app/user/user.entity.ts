import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import { Review } from '../review/review.entity';

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
    
}