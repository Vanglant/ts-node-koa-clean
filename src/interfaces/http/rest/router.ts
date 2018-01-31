/**
 * Account resource should return the routes
 */
import * as KoaRouter from 'koa-router';
import AccountController from './controllers/account.controller';

class Router {
    public router: KoaRouter;
    constructor() {
        this.router = new KoaRouter();
        this.addRoutes();
    }
    private addRoutes() {
        this.router.use(AccountController.routes());
    }
}
export default new Router().router;