import 'reflect-metadata';
import { InversifyKoaServer } from 'inversify-koa-utils';
import container from '../../../config/inversify.config';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import { injectable } from 'inversify';

@injectable()
export default class KoaServer {
    private koaInstance;
    private router: KoaRouter;
    private options: KoaRouter.IRouterOptions;
    private server: InversifyKoaServer;

    constructor() {
        this.options = { prefix: '/users' };
        this.router = new KoaRouter(this.options);
        this.server = new InversifyKoaServer(container);
        this.configure();

    }
    private setMiddleware(app: Koa) {

    }
    private configure() {
        this.server.setConfig((koaInstance: Koa) => {
            this.setMiddleware(koaInstance);
        });
    }
    public listen(port: number) {
        this.koaInstance = this.server.build();
        this.koaInstance.listen(3000);
    }
    public close() {
        // TODO: Implementar el cierre correctamente
        // this.koaInstance.close();
    }
}
