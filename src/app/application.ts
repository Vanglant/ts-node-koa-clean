import server from "../interfaces/http/rest/server";

export default class Application {
    private server;
    // The constructor should have DI of: server, database, logger
    constructor() {
        this.server = new server();
    }
    async start() {
        await this.server.start();
    }
}