import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

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

    
}