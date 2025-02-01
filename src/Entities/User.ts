import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')        // Custom table name
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:string

    @Column()
    name!: string

    @Column({
        unique: true
    })
    userName!: string

    @Column()
    password!: string

    @Column()
    @CreateDateColumn()
    createdAt!: string

    @Column({
        default: false
    })
    deleted!: boolean
}