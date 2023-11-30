import { DataSource } from "typeorm";
import { Student } from "./entities/Student";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "node_api",
    synchronize: true,
    logging: true,
    entities: [Student],
    subscribers: [],
    migrations: [],
})