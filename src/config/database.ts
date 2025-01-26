import { DataSource } from "typeorm";

export const DATASOURCE = new DataSource({
    type: 'postgres',
    host: '172.17.0.3',
    port: 5432,
    username: 'postgres',
    password: 'ak@sh.ay',
    database: 'Test',
    entities: []
})