import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')        // Custom table name
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:string

    @Column()
    name!: string

    @Column()
    userName!: string

    @Column()
    password!: string
}