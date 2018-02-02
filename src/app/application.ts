/*
import server from '../interfaces/http/rest/server';
import database from '../infra/database/database';

export default class Application {
    private server;
    private connection;

    // The constructor should have DI of: server, database, logger
    constructor() {
        this.connection = new database();
        this.server = new server();
    }
    async start() {
            await this.connection.create();
            await this.server.start();
    }
}*/
