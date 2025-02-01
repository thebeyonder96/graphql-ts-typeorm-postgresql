import { readdirSync } from "fs";
import path from "path";
import { DataSource } from "typeorm";

export const DATASOURCE = new DataSource({
    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'postgres',
    password: 'ak@sh.ay',
    database: 'postgres',
    entities: [
        "src/Entities/**/*.ts"
      ],
    // synchronize: true,
    // logging: true
});