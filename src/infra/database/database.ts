import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

export default class Database {
    async create() {
        return await createConnection();
    }
}