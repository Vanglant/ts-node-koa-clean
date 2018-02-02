// Abstract away from the container
/*

import Application from './app/application';

const application = new Application();

application.start().catch(() => {
    process.exit();
});*/
import 'reflect-metadata';
import * as Koa from 'koa';
import container from './inversify.config';
import * as KoaRouter from 'koa-router';
import TYPES from './types';
import { createConnection } from 'typeorm';
import { InversifyKoaServer } from 'inversify-koa-utils';

class Bootstrap {
    private app: Koa;
    private router: KoaRouter;
    private options: KoaRouter.IRouterOptions;

    constructor() {
        this.app = new Koa();
        this.options = {prefix: '/users'};
        this.router = new KoaRouter(this.options);
    }

    public server() {
        createConnection().then(() => {
            this.startKoaServer();
        });
    }

    private startKoaServer() {

        let server = new InversifyKoaServer(container);
        server.setConfig((app: Koa) => {

        });
        let serverInstance = server.build();
        serverInstance.listen(3000);
        console.log('test');
    }
}
let bootstrap = new Bootstrap();
bootstrap.server();

