import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToOne(()=>Profile,{cascade:true,lazy:true,onDelete:"CASCADE"})
    @JoinColumn()
    profile:Promise<Profile>

}