import { readdirSync } from "fs";
import path from "path";
import { DataSource } from "typeorm";

const ENTITIES_PATH = path.join(__dirname,'..','Entities')
const ENTITIES = readdirSync(ENTITIES_PATH)
        .filter(file=> file.endsWith('.ts'))
        .map(file=> {
            const entity = require(path.join(ENTITIES_PATH, file));
            return entity;
        });

export const DATASOURCE = new DataSource({
    type: 'postgres',
    host: '172.17.0.3',
    port: 5432,
    username: 'postgres',
    password: 'ak@sh.ay',
    database: 'Test',
    entities: ENTITIES,
    synchronize: true,
    logging: true
});