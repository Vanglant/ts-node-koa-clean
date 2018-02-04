import 'reflect-metadata';
import { InversifyKoaServer } from 'inversify-koa-utils';
import container from '../../../config/inversify.config';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import { injectable } from 'inversify';

@injectable()
export class KoaServer {
    private app: Koa;
    private router: KoaRouter;
    private options: KoaRouter.IRouterOptions;
    private server: InversifyKoaServer;

    constructor() {
        this.app = new Koa();
        this.options = {prefix: '/users'};
        this.router = new KoaRouter(this.options);
        this.server = new InversifyKoaServer(container);
        this.configure();
        this.start();

    }
    private setMiddleware(app: Koa) {

    }
    private configure() {
        this.server.setConfig((app: Koa) => {
            this.setMiddleware(app);
        });
    }

    private start() {
        let serverInstance = this.server.build();
        serverInstance.listen(3000);
    }
}
